// All the endpoints are included. Use this for local development.

import { errorHandler } from '../middleware';
import app from './base';
import health from '../services/health/router';
import tenent from '../services/tenent/router';
import stats from '../services/stats/router';

app.use((req, res, next) => {
  console.log(JSON.stringify({ url: req.path, method: req.method, body: req.body }));
  next();
});

app.use((req, res, next) => {
  res.locals.userId = 'test';
  next();
});

// Same routes as API Gateway.
app.use('/tenents', tenent);
app.use('/public/stats', stats);
app.use(errorHandler);

export default app;
