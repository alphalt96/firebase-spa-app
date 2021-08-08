import { HelloService } from '../services';
import * as express from 'express';
import { accessLog } from '../shared/logs'

class HelloController {
  constructor(
    private readonly helloService: HelloService
  ) {
    this.sayHello = this.sayHello.bind(this);
  }

  @accessLog(true)
  sayHello (req: express.Request, res: express.Response) {
    this.helloService.getHello();
    res.status(200).json({
      someMessage: 'hello'
    })
  }
}

export { HelloController }
