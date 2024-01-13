package common

import "lighthouse/api/common/model"

func (s *Storage) GetAllEvents() ([]model.Event, error) {
	var authors []model.Event
	err := s.db.Model(&model.Event{}).Select(&authors)
	if err != nil {
		return nil, err
	}
	return authors, nil
}
