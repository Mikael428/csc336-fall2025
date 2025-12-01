const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());

let data = require("./data.json");

app.get("/api/schedule", (req, res) => {
    res.json(data.schedule);
});

app.get("/api.guests", (req, res) => {
    res.json(data.guests);
})

app.post("/api/guests", (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) return res.status(400).json({ error: "Missing" });

    if (data.guests.some(g => g.email === email))
        return res.status(400).json({ error: "Registered Already" });

    data.guests.push({ name, email });
    fs.writeFileSync("./data.json", JSON.stringify(data));
    res.status(201).json({ success: true });
});

app.listen(3001);