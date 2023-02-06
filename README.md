# 설명
sam을 이용하여 lambda와 sqs로 구성된 serverless model 생성

- producerFunction - lambda
  - ApiGateway
- consumerFunction - lambda
- dependencyLayer - lambdaLayer
- SQS - sqs

# 사용법
### 요구사항
- aws-cli
- aws-sam-cli
- docker

### 실행
```
sam build
sam deploy --guided
```