const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const WORLD_FILE = path.join(__dirname, 'world.json');

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/world', (req, res) => {
    fs.readFile(WORLD_FILE, (err, data) => {
        if (err) {
            console.error("Failed...", err);
            return res.status(500).json({error: "Failed to load..."});
        }
        res.set('Content-Type', 'application/json');
        res.send(data);
    });
});

app.post('/update', (req, res) => {
    fs.readFile(WORLD_FILE, (err, data) => {
        if (err) {
            console.error("Failed to read", err);
            return res.status(500).json({error: 'Failed to access world data'});
        }
    let worldData = { inhabitants: []};
    try {
        worldData = JSON.parse(data);
    } catch (parseError) {
        console.error("Failed to parse", parseError);
        return res.status(500).json({error: 'Existing data is not available'});
    }
    

const updatedClient = req.body;

if (updatedClient.action === 'add_inhabitant' && updatedClient.name && updatedClient.role) {
    const newInhab = {
        name: updatedClient.name,
        role: updatedClient.role,
        item: updatedClient.item
    };
    worldData.inhabitants.push(newInhab);
} else if (updatedClient.action === "update_property" && updatedClient.key && updatedClient.value) {
    worldData[updatedClient.key] = updatedClient.value;
}

const Jsonupdated = JSON.stringify(worldData, null, 2);

fs.writeFile(WORLD_FILE, Jsonupdated, (writeErr) => {
    if (writeErr) {
        console.error("Failed to update written file", writeErr);
        return res.status(500).json({error: "failed to save world data"});
    }
    res.status(200).json(worldData);
});
    });
});

app.listen(PORT, () => {
    console.log(`Server Running at http://localhost:3000/`);
    console.log(`Static files...`);
});