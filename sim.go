package main

import (
	"context"
	"floqars/rpc/nearby"
	"log"
	"net/http"
)

func main() {
	client := nearby.NewNearbyProtobufClient("http://localhost:3333", &http.Client{})
	updateReply, err := client.UpdateLocation(context.Background(), &nearby.UpdateLocationRequest{
		Id:  "507f1f77bcf86cd799439011",
		Lat: 34.1786994934082,
		Lng: -118.47969055175781,
		// 34.1786997,-118.4796876
	})
	if err != nil {
		log.Fatal(err)
	}
	log.Println(updateReply)

	nearbyReply, err := client.FindNearby(context.Background(), &nearby.NearbyRequest{
		Lat: 34.17,
		Lng: -118.47,
	})
	if err != nil {
		log.Fatal(err)
	}
	log.Println(nearbyReply)
}
