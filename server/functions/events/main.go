package main

import (
	"context"
	"fmt"
	"log"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"
)

func handler(ctx context.Context, request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	// Initialize AWS session and DynamoDB client
	sess := session.Must(session.NewSession())
	svc := dynamodb.New(sess)

	// Set up DynamoDB parameters
	params := &dynamodb.ScanInput{
		TableName: aws.String("YourDynamoDBTableName"),
	}

	// Perform DynamoDB scan
	result, err := svc.Scan(params)
	if err != nil {
		log.Printf("Error scanning DynamoDB table: %v", err)
		return events.APIGatewayProxyResponse{Body: fmt.Sprintf("Error: %v", err), StatusCode: 500}, nil
	}

	// Process DynamoDB scan result
	var items []map[string]interface{}
	for _, item := range result.Items {
		itemMap := make(map[string]interface{})
		for key, value := range item {
			itemMap[key] = value
		}
		items = append(items, itemMap)
	}

	// Return API response
	return events.APIGatewayProxyResponse{Body: fmt.Sprintf("DynamoDB Items: %v", items), StatusCode: 200}, nil
}

func main() {
	lambda.Start(handler)
}
