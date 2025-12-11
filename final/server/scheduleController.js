const scheduleData = [
    { time: "10:00 AM", title: "Opening Keynote", location: "Main Hall" },
    { time: "11:00 AM", title: "Workshop: React Basics", location: "Room A" },
    { time: "12:00 PM", title: "Lunch", location: "Cafeteria" },
    { time: "01:00 PM", title: "Guest Speaker", location: "Main Hall" },
    { time: "02:00 PM", title: "Q&A", location: "Room B" },
    { time: "03:00 PM", title: "Closing Remarks", location: "Main Hall" }
];

export const getSchedule = (req, res) => {
    res.status(200).json(scheduleData);
};

