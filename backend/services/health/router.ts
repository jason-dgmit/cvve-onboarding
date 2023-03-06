import express from 'express';
import { wrap } from '../../common/express';
import * as c from './controller';

const router = express.Router();

router.get('/', wrap(c.getHealth));

export default router;
