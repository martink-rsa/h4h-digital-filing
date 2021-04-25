import * as express from 'express';
import { PatientsRouter } from './patients';
import { HTTPResponse } from './types/httpTypes';

const app = express();

const { checkJWT } = require('./util/jwt');

app.use(express.json());

app.get('/test', checkJWT, (req: Express.Request, res: HTTPResponse) => {
  console.info('Test JWT decode', req.user);
  return res.json({
    success: true,
    data: req.user,
  });
});

app.use('/patients', PatientsRouter);

export default app;
