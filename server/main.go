package main

import (
	"fmt"
	"lighthouse/infrastructure"
	"lighthouse/initialisers"
	"lighthouse/utils"
)

func main() {
	initialisers.LoadEnvVariables()

	// load AWS config and dynamodb client
	config := infrastructure.NewAWSConfig()
	client := infrastructure.NewDynamoDBClient(config)

	table, err := utils.DescribeTable(client, "Messages")

	if err != nil {
		fmt.Println(err)
	}

	fmt.Printf(
		"Table ID: %s \nTable Name: %s\n\n",
		*table.Table.TableId, //as DescribeTable returns a pointer, we need to dereference the values
		*table.Table.TableName,
	)

}
