package authorizer

import (
	"context"
	"fmt"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"
)

func authorize(ctx context.Context, request events.APIGatewayCustomAuthorizerRequest) (events.APIGatewayCustomAuthorizerResponse, error) {
	// Extract userId from the request
	userId := request.AuthorizationToken

	// Validate userId
	if userId == "" {
		return events.APIGatewayCustomAuthorizerResponse{}, fmt.Errorf("Unauthorised")
	}

	// Check user existence in DynamoDB
	userExists, err := checkUserExistence(userId)
	if err != nil {
		return events.APIGatewayCustomAuthorizerResponse{}, err
	}

	if !userExists {
		return events.APIGatewayCustomAuthorizerResponse{}, fmt.Errorf("Unauthorised")
	}

	// Authorization successful
	return generatePolicy(userId, "Allow"), nil
}

func checkUserExistence(userID string) (bool, error) {
	sess := session.Must(session.NewSession())
	svc := dynamodb.New(sess)

	result, err := svc.GetItem(&dynamodb.GetItemInput{
		TableName: aws.String("YourDynamoDBTable"),
		Key: map[string]*dynamodb.AttributeValue{
			"UserId": {
				S: aws.String(userID),
			},
		},
	})

	if err != nil {
		return false, err
	}

	return result.Item != nil, nil
}

func generatePolicy(principalID string, effect string) events.APIGatewayCustomAuthorizerResponse {
	return events.APIGatewayCustomAuthorizerResponse{
		PrincipalID: principalID,
		PolicyDocument: events.APIGatewayCustomAuthorizerPolicy{
			Version: "2012-10-17",
			Statement: []events.IAMPolicyStatement{
				{
					Action:   []string{"execute-api:Invoke"},
					Effect:   effect,
					Resource: []string{"*"}, //change! to specific function
				},
			},
		},
	}
}

func main() {
	lambda.Start(authorize)
}
