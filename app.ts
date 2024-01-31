import express, { Request, Response, NextFunction } from 'express';
import DelayService from "./DelayService";
import {ExampleResponse} from "./ExampleResponse";
import logger from './Logger';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
const port: number = 3000;

app.use((request, response, next) => {
  const {method, originalUrl, body} = request;
  logger.info(`[HTTP Inbound] Request\n${method} ${originalUrl}\nBody: ${JSON.stringify(body)}`);

  const {write, end} = response;
  const chunks = [];
  response.write = function (chunk: any) {
    chunks.push(chunk);
    return write.apply(response, arguments);
  };
  response.end = function (chunk: any) {
    if (chunk) {
      chunks.push(chunk);
    }
    return end.apply(response, arguments);
  };
  response.on('finish', () => {
    const {statusCode} = response;
    const responseBody = Buffer.concat(chunks).toString('utf-8');

    logger.info(`[HTTP Inbound] Response\nStatus: ${statusCode}\nBody: ${JSON.stringify(JSON.parse(responseBody), null, 2)}`);
  });

  next();
});

app.get('/api/delay', async (req: Request, res: Response, next: NextFunction) => {
  const delayService: DelayService = new DelayService();
  const queryNumber: number = parseInt(<string>req.query.query);

  const firstRequest: Promise<string> = delayService.delayRequest(queryNumber);
  const secondRequest: Promise<string> = delayService.delayRequest(parseInt(<string>process.env.DEFAULT_DELAY));

  const [firstResponse, secondResponse] = await Promise.all([firstRequest, secondRequest]);

  res.send(new ExampleResponse(firstResponse, secondResponse));
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
