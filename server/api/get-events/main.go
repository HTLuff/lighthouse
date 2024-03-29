package events

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
func Handler() (events.APIGatewayProxyResponse, error) {
	db, err := common.ConnectToDB()
	if err != nil {
		return common.InternalServerError(), err
	}
	eventsData, err := db.GetAllEvents()
	if err != nil {
		return common.InternalServerError(), err
	}
	eventsBts, err := json.Marshal(eventsData)
	if err != nil {
		return common.InternalServerError(), err
	}
	resp := events.APIGatewayProxyResponse{
		StatusCode:      200,
		IsBase64Encoded: false,
		Body:            string(eventsBts),
		Headers: map[string]string{
			"Content-Type": "application/json",
		},
	}

	return resp, nil
}

func main() {
	lambda.Start(Handler)
}
