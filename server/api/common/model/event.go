package model

import "time"

type Event struct {
	ID        int       `json:"id"`
	Name      string    `json:"name"`
	AuthorID  int       `json:"author_id"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}
