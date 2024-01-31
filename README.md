# express-example
express bff 서버 예제

## 적용해볼 것
- [ ] ~~OpenApi Generator로 서버 코드 생성하기~~
- [x] OpenApi Generator로 서버 Client 생성하기
- [x] 환경변수를 주입받아 코드에서 사용하기
- [x] 서버 Client를 비동기로 사용하기
- [x] inbound, outbound 로깅

## OpenApi-Generator
```shell
$ npm install @openapitools/openapi-generator-cli

$ java -jar openapi-generator-cli.jar generate -i ./apispec/deploy-api.yaml -g typescript-axios -o './client'
```

## Hot to start application
```shell
# $ npm i express
# $ npm i typescript @types/express
# $ npm i nodemon
# $ npm i ts-node
# $ npm i axios
# $ npm i morgan
# $ npm i --save-dev @types/morgan
# $ npm i winston
# $ npm i --save-dev @types/winston
# $ npm i dotenv

$ npm start
```

ES6 스타일의 임포트를 사용?
```json
{
  "compilerOptions": {
    "esModuleInterop": true
  }
}
```
