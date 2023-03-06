// Only endpoints with authentication are included.

import { auth, errorHandler } from '../middleware';
import app from './base';
import tenent from '../services/tenent/router';

app.use(auth);
app.use('/tenents', tenent);
app.use(errorHandler);

export default app;
