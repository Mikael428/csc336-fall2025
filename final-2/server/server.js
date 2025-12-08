import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';

const app = express();
const PORT = 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const REG_DB_FILE = path.join(__dirname, 'db_registrations.json');


app.use(cors());
app.use(bodyParser.json());

function readRegData() {
    try {
        const data = fs.readFileSync(REG_DB_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return []; 
    }
}

function writeRegData(data) {
    try {
        fs.writeFileSync(REG_DB_FILE, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
        console.error("Error writing registration data file:", error.message);
    }
}

app.post('/api/register', (req, res) => {
    const { name, email } = req.body;
    let registrations = readRegData();

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required for registration.' });
    }

    const emailExists = registrations.some(reg => reg.email.toLowerCase() === email.toLowerCase());
    if (emailExists) {
        return res.status(409).json({ error: `The email address "${email}" is already registered.` });
    }

    const newRegistration = {
        name: name.trim(),
        email: email.trim(),
        timestamp: new Date().toISOString()
    };

    registrations.push(newRegistration);

    writeRegData(registrations);

    res.status(201).json({ message: 'Registration successful', registration: newRegistration });
});

app.listen(PORT, () => {
    console.log(`Registration listening on http://localhost${PORT}`);
})