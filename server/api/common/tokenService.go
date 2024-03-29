package common

import (
	"os"
	"time"

	"lighthouse/api/common/model"

	"github.com/dgrijalva/jwt-go"
	"github.com/jinzhu/gorm"
)

type User struct {
	gorm.Model
	ID            string
	Email         string
	Password      string `json:"-"`
	EmailVerified bool
	LoginTry      int
}

func CreateTokens(user User) (model.TokenSet, error) {
	accessTokenExpireAt := time.Now().Add(1 * time.Hour)
	tokenStr, signErr := CreateToken(user, "Access", accessTokenExpireAt)

	if signErr != nil {
		return model.TokenSet{}, signErr
	}

	refreshTokenExpireAt := time.Now().Add(24 * time.Hour)
	refreshTokenStr, signErr := CreateToken(user, "Refresh", refreshTokenExpireAt)

	if signErr != nil {
		return model.TokenSet{}, signErr
	}
	return model.TokenSet{AccessToken: tokenStr, ExpireAt: accessTokenExpireAt, RefreshToken: refreshTokenStr, RefreshExpireAt: refreshTokenExpireAt}, nil
}

func ValidateToken(token string) (*jwt.Token, error) {

	return jwt.ParseWithClaims(token, &model.CustomClaims{}, func(token *jwt.Token) (interface{}, error) {
		return []byte(os.Getenv("jwt_key")), nil
	})
}

func CreateToken(user User, tokenType string, expireTime time.Time) (string, error) {
	var claim model.CustomClaims
	claim.Id = string(user.ID)
	claim.Type = tokenType
	expiresAt := expireTime
	claim.ExpiresAt = expiresAt.Unix()
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claim)
	jwtKey := os.Getenv("jwt_key")
	tokenStr, signErr := token.SignedString([]byte(jwtKey))
	return tokenStr, signErr
}
