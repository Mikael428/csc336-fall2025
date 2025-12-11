import express from 'express';

import scheduleData from "./scheduleController.js";

const router = express.Router();

router.get("/schedule", (req, res) => {
  res.json(scheduleData);
});

export default router;