const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;
const WORLD_FILE = path.join(__dirname, 'world.json');

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/world', (req, res) => {
    fs.readFile(WORLD_FILE, (err, data) => {
        if (err) {
            console.error("Failed...", err);
            return res.status(500).json({error: "Failed to load..."});
        }
        res.sethead('Content-Type', 'application/json');
        res.send(data);
    });
});

app.post('/update', (req, res) => {
    fs.readFile(WORLD_FILE, (err, data) => {
        if (err) {
            console.error("Failed to read", err);
            return res.status(500).json({error: 'Failed to access world data'});
        }
    let worldData;
    try {
        worldData = JSON.parse(data);
    } catch (parseError) {
        console.error("Failed to parse", parseError);
        return res.status(500).json({error: 'Existing data is not available'});
    }
    }
    )
})

const updatedClient = req.body;

const worldDataNew = Object.assign({}, worldData, updatedClient);

const Jsonupdated = JSON.stringify(worldDataNew, null, 2);

fs.writeFile(WORLD_FILE, updatedClient, (writeErr) => {
    if (writeErr) {
        console.error("Failed to update written file", writeErr);
        return res.status(500).json({error: "failed to save world data"});
    }
    res.status(200).json(worldDataNew);
});

app.listen(PORT, () => {
    console.log(`Server Running at http://localhost${PORT}`);
    console.log(`Static files...`);
})