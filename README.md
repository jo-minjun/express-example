# express-example
express bff 서버 예제

## 적용해볼 것
- [ ] OpenApi Generator로 서버 코드 생성하기
- [ ] OpenApi Generator로 서버 Client 생성하기
- [ ] 환경변수를 주입받아 코드에서 사용하기
- [ ] 서버 Client를 비동기로 사용하기
- [ ] inbound, outbound 로깅

## OpenApi-Generator
```shell
$ npm install @openapitools/openapi-generator-cli

$ java -jar openapi-generator-cli.jar generate -i ./apispec/bff-api.yaml -g nodejs-express-server -o './server'
$ java -jar openapi-generator-cli.jar generate -i ./apispec/deploy-api.yaml -g typescript-axios -o './client'
```

## Hot to start application
```shell
# $ npm i express
# $ npm install nodemon
```
