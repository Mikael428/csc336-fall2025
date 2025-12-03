const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());

let data = require("./data.json");

app.get("/api/schedule", (req, res) => {
    res.json([
        {time: "10:00am", title: "Registration Time", location: "Lobby"},
        {time: "11:00am", title: "Meeting", location: "2nd Floor Talkative"},
        {time: "12:00pm", title: "Lunch", location: "Lunch Room"},
        {time: "01:00pm", title: "Meeting", location: "4th Floor Talkative"},
    ]);
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