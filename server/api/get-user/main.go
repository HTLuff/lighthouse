// Get User
package main

import (
	"encoding/json"

	"lighthouse/api/common"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

// Response is of type APIGatewayProxyResponse since we're leveraging the
// AWS Lambda Proxy Request functionality (default behavior)
//
// https://serverless.com/framework/docs/providers/aws/events/apigateway/#lambda-proxy-integration

// Handler is our lambda handler invoked by the `lambda.Start` function call
func Handler(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {

	userId := request.QueryStringParameters["userId"]
	password := request.QueryStringParameters["password"]

	// Validate userId and password
	if userId == "" || password == "" {
		return events.APIGatewayProxyResponse{
			StatusCode: 400,
			Body:       "Unauthorized",
		}, nil
	}
	db, err := common.ConnectToDB()
	if err != nil {
		return common.InternalServerError(), err
	}
	user, err := db.GetUser(userId)
	if err != nil {
		return common.InternalServerError(), err
	}
	userBts, err := json.Marshal(user)
	if err != nil {
		return common.InternalServerError(), err
	}
	resp := events.APIGatewayProxyResponse{
		StatusCode:      200,
		IsBase64Encoded: false,
		Body:            string(userBts),
		Headers: map[string]string{
			"Content-Type": "application/json",
		},
	}

	return resp, nil
}

func main() {
	lambda.Start(Handler)
}
