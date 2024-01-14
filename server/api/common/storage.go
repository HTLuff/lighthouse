package common

import (
	"context"
	"fmt"
	"lighthouse/api/common/model"
	"os"

	"github.com/go-pg/pg/v10"
)

type StorageIFace interface {
	GetUser(userID string) (model.User, error)
	GetAllEvents() ([]model.Event, error)
}

type Storage struct {
	db *pg.DB
}

var sto StorageIFace

func ConnectToDB() (StorageIFace, error) {
	if sto != nil {
		return sto, nil
	}
	db := pg.Connect(&pg.Options{
		Addr:     fmt.Sprintf("%s:%s", os.Getenv("DB_HOST"), os.Getenv("DB_PORT")),
		User:     os.Getenv("DB_USER"),
		Password: os.Getenv("DB_PASSWORD"),
		Database: os.Getenv("DB_NAME"),
	})
	err := db.Ping(context.Background())
	if err != nil {
		return nil, err
	}
	sto = &Storage{db: db}

	return sto, nil
}
