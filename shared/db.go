package shared

import (
	"context"
	"log"
	"os"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// DB is the global DB instance
var DB *mongo.Database

var connected = false

// Connect connects to the DB and sets the global DB instance up
func Connect() {
	if connected {
		return
	}
	DBURL, ok := os.LookupEnv("DBURL")
	if DBURL == "" || !ok {
		panic("DB URL not found, panic!")
	}
	clientOptions := options.Client().ApplyURI(DBURL).SetMinPoolSize(1).SetMaxPoolSize(5)
	client, err := mongo.Connect(context.TODO(), clientOptions)

	if err != nil {
		log.Fatal(err)
	}

	// Check the connection
	err = client.Ping(context.TODO(), nil)
	if err != nil {
		log.Fatal(err)
	}
	DB = client.Database("floqars")

	connected = true
}
