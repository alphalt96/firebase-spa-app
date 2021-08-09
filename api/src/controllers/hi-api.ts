import { HelloService } from '../services';
import * as express from 'express';
import { accessLog } from '../shared/logs';

class HiController {
  constructor(
    private readonly helloService: HelloService
  ) {
    this.sayHi = this.sayHi.bind(this);
  }

  @accessLog(true)
  sayHi (req: express.Request, res: express.Response) {
    this.helloService.getHello();
    res.status(200).json();
  }
}

export { HiController };
