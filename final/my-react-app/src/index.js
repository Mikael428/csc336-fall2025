const express = require("express");
const fs = require("fs");
const app = express();
const guestRoutes = require(".src/routes/guestRoutes")
app.use(express.json());

let data = require("./data.json");




app.get('/api/schedule', (req, res) => {
  const scheduleData = [
    { time: "10:00 AM", title: "Opening Keynote", location: "Main Hall" },
    { time: "11:00 AM", title: "Workshop", location: "Room A" },
    { time: "12:00 PM", title: "Lunch", location: "Cafeteria" }
  ];
  res.json(scheduleData);
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