package common

import "lighthouse/api/common/model"

func (s *Storage) GetUser() (model.User, error) {
	var user model.User
	err := s.db.Model(&model.User{}).Select(&user)
	if err != nil {
		return model.User{}, err
	}
	return user, nil
}
