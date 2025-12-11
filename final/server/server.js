import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import scheduleRouter from './scheduleRoutes.js';
import registrationRouter from './registrationRoutes.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    origin: "https://csc336-fall2025-2-final.onrender.com",
  })
);

app.use(bodyParser.json());

app.use('/api', scheduleRouter);
app.use('/api', registrationRouter);

app.listen(PORT, () => {
    console.log(`Registration listening on http://localhost:${PORT}`);
});