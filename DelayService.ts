import axios from 'axios';
import {DummyApi} from './client';
import logger from './Logger';

class DelayService {
  private dummyApi: DummyApi;

  constructor() {
    this.dummyApi = new DummyApi(undefined, 'https://httpbin.org', axios);
  }

  async delayRequest(query: number): Promise<string> {
    const result = await this.dummyApi.getDelayString(query);

    return result.data;
  }
}

axios.interceptors.request.use(request => {
  const {method, url, headers, data} = request;
  logger.info(`Request\n${method} ${url}\nHeaders: '${JSON.stringify(request.headers)}\nBody: ${JSON.stringify(data, null, 2)}`);

  return request
})

axios.interceptors.response.use(response => {
  const {status, data} = response;
  if (!response || !response.status.toString().startsWith('2')) {
    throw new Error('요청에 실패했습니다');
  }

  logger.info(`Response\nStatus: ${status}\nBody: ${JSON.stringify(data, null, 2)}`);

  return response
})

export default DelayService;
