import express from 'express';

import * as registrationController from './registrationController.js';

const router = express.Router();

router.post('/register', registrationController.addRegistration);

export default router;