import express from 'express';
import * as scheduleController from './scheduleController.js';

const router = express.Router();

router.get('/schedule/?', scheduleController.getSchedule);

export default router;