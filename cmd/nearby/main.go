package main

import (
	"floqars/internal/nearbyserver"
	"floqars/rpc/nearby"
	"floqars/shared"
	"log"
	"net/http"
	"os"
)

func main() {
	shared.Connect()
	port := os.Getenv("PORT")
	if port == "" {
		log.Fatal("$PORT must be set")
	}
	server := &nearbyserver.NearbyServer{}
	twirpHandler := nearby.NewNearbyServer(server, nil)
	http.ListenAndServe(":"+port, twirpHandler)
}
