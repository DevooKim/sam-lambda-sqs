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
```bash
cd ./dependencies/nodejs && npm i && cd ../..

sam build
sam local invoke  -e events/event.json
```
_이었지만 sqs를 붙이고 local에서 실행할 방법을 찾는 중_

### 배포
```bash
sam deploy --guided
```