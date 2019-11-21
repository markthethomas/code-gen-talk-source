package nearbyserver

import (
	"context"
	"log"

	pb "floqars/rpc/nearby"
	"floqars/shared"

	"github.com/mmcloughlin/geohash"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/writeconcern"
)

// NearbyServer represents the nearby geo-location microservice
type NearbyServer struct{}

// Location represents a location
type Location struct {
	ID    primitive.ObjectID `json:"_id" bson:"_id"`
	RefID primitive.ObjectID `json:"refID" bson:"refID"`
	Lat   float64            `json:"lat" bson:"lat"`
	Lng   float64            `json:"lng" bson:"lng"`
}

// FindNearby finds ids near a given lat/lng
func (s *NearbyServer) FindNearby(ctx context.Context, req *pb.NearbyRequest) (*pb.NearbyReply, error) {
	ids := []string{}
	opt := options.Find()
	hash := geohash.Encode(float64(req.GetLat()), float64(req.GetLng()))
	box := geohash.BoundingBox(hash)
	log.Println(hash)
	log.Printf("%+v", box)
	predicate := primitive.M{
		"$and": []primitive.M{
			primitive.M{"lat": primitive.M{
				"$gte": box.MinLat,
			}},
			primitive.M{"lat": primitive.M{
				"$lte": box.MaxLat,
			}},
			primitive.M{"lng": primitive.M{
				"$gte": box.MinLng,
			}},
			primitive.M{"lng": primitive.M{
				"$lte": box.MaxLng,
			}},
		},
	}
	cur, err := shared.DB.Collection("locations").Find(context.TODO(), predicate, opt)
	for cur.Next(context.TODO()) {
		doc := Location{}
		err := cur.Decode(&doc)
		if err != nil {
			log.Fatal(err)
		}
		ids = append(ids, doc.ID.Hex())
	}

	if err != nil {
		return nil, err
	}
	return &pb.NearbyReply{
		Ids: ids,
	}, nil
}

// Update Location adds a location to our database
func (s *NearbyServer) UpdateLocation(ctx context.Context, req *pb.UpdateLocationRequest) (*pb.UpdateLocationReply, error) {
	opt := options.Collection().SetWriteConcern(writeconcern.New(writeconcern.W(1)))
	id, err := primitive.ObjectIDFromHex(req.GetId())
	if err != nil {
		return nil, err
	}
	loc := Location{
		ID:    primitive.NewObjectID(),
		RefID: id,
		Lat:   float64(req.GetLat()),
		Lng:   float64(req.GetLng()),
	}
	if _, err := shared.DB.Collection("locations", opt).InsertOne(context.TODO(), loc); err != nil {
		return nil, err
	}
	return &pb.UpdateLocationReply{
		Success: true,
	}, nil
}
