.PHONY: build clean deploy

build:
	# env GOARCH=amd64 GOOS=linux go build -ldflags="-s -w" -o bin/events api/get-events/main.go
	env GOARCH=amd64 GOOS=linux go build -ldflags="-s -w" -o bin/user api/get-user/main.go
	env GOARCH=amd64 GOOS=linux go build -ldflags="-s -w" -o bin/user api/authorizer/main.go

clean:
	rm -rf ./bin

deploy: clean build
	npx sls deploy --verbose
