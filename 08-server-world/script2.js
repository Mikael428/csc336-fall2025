const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 3000;
const NEWPEOPLE_FILE = path.join(__dirname, 'newpeople.json');

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("personForm");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const person = {
            name: document.getElementById('name').value,
            occupation: document.getElementById('occupation').value,
            item: document.getElementById('item').value,

        };
        
    })
})
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

async function newPeopleData() {
    try {
        const data = await fs.readFile(NEWPEOPLE_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Error.", error.code);
        return [];
    }
}

async function writePeopleData(data) {
    try {
        await fs.writeFile(NEWPEOPLE_FILE, JSON.stringify(data, null, 2), 'utf8');
} catch (error) {
    console.error('Error Writing...', error);
    throw new Error('Failed to save.');
}
}

app.get('/people', async(req, res) => {
    try {
        const peopleEntries = await newPeopleData();
        res.json(peopleEntries.reverse());
    } catch (error) {
        res.status(500).json({ error: 'Could not fetch'});
    }
});

app.post('/sign', async (req, res) => {
    const newEntry = req.body;

    if (!newEntry || !newEntry.name || !newEntry.message || !newEntry.color) {
        return res.status(400).json({error: 'Invalid format.'})
    }
})


    try {
        const currentPepole = await newPeopleData();
        
        const entryToPut = {
            id: Date.now(),
            name: newEntry.name,
            message: newEntry.message,
            color: newEntry.color,
            timestamp: new Date().toISOString()
        };

        currentPepole.push(entryToPut);
        await writePeopleData(currentPepole);
        res.json(currentPepole.reverse());

    } catch (error) {
        console.error('Sign-in flopped', error);
        res.status(500).json({error: 'Failed to record.'});
    }

    app.listen(PORT, () => {
        console.log('Server running at http://localhost:${PORT}');
        console.log('Static files from ./public');
    });
