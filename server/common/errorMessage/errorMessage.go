package errormessage

const (
	Ok                      = 99
	DatabaseError           = 100
	JsonParseError          = 101
	UserAlreadyExist        = 102
	UserNameOrPasswordWrong = 103
	CaptchaNeeded           = 104
	TokenIsNotValid         = 105
)

var statusText = map[int]string{
	DatabaseError:           "Unauthorised",
	JsonParseError:          "JSON_PARSE_ERROR",
	UserAlreadyExist:        "Unauthorised",
	UserNameOrPasswordWrong: "Unauthorised",
	Ok:                      "OK",
	CaptchaNeeded:           "CAPTCHA_NEEDED",
	TokenIsNotValid:         "Unauthorised",
}

func StatusText(code int) string {
	return statusText[code]
}
