import * as express from 'express';
import * as path from 'path';
// import * as cors from 'cors';
import * as functions from 'firebase-functions';
import { HelloController, HiController } from './controllers';
import { HelloService } from './services';
const api = express();
const app = express();

// init services
const helloService = new HelloService();

// init controllers
const helloController = new HelloController(helloService);
const hiController = new HiController(helloService);

// api hello
api.get('/hello', helloController.sayHello);
api.get('/hi', hiController.sayHi);

exports.api = functions.https.onRequest(api);

app.get('/', function (req: express.Request, res: express.Response) {
  res.sendFile(path.join(process.cwd() ,'../public', 'index.html'));
});

exports.app = functions.https.onRequest(app);
