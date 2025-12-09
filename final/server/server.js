import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import scheduleRouter from './scheduleRoutes.js';
import registrationRouter from './registrationRoutes.js';

const app = express();
const PORT = 3001;

const REG_DB_FILE = path.join(__dirname, 'db_registrations.json');


app.use(cors());
app.use(bodyParser.json());

app.use('/api', scheduleRouter);
app.use('/api', registrationRouter);


app.listen(PORT, () => {
    console.log(`Registration listening on http://localhost${PORT}`);
})