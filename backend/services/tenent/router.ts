import express from 'express';
import { wrap } from '../../common/express';
import * as c from './controller';

const router = express.Router();
router.get('/', wrap(c.getTenents));
router.post('/', wrap(c.createTenent));
router.post('/delete', wrap(c.deleteTenent));
router.post('/run', wrap(c.runSampleJob));

export default router;
