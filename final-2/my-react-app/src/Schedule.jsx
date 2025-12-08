import { useEffect, useState } from "react";
import "./Schedule.css";
import Conferenced from "./assets/Conf_Img.jpg"

function ScheduleTable({ rows }) {
    return (
        <table
            className = "schedule-table"
            border="1"
            cellPadding="5"
            style={{ borderCollapse: "collapse" }}
        >
            <thead>
                <tr>
                    <th>Time</th>
                    <th>Event</th>
                    <th>Location</th>
                </tr>
            </thead>
                <tbody>
                    {rows.map((item, idx) => (
                        <tr key={idx}>
                            <td>{item.time}</td>
                            <td>{item.title}</td>
                            <td>{item.location || "TBD"}</td>
                        </tr>
                    ))}
                </tbody>
        </table>  
    );
}

function Schedule() {
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  const testData = [
    { time: "10:00 AM", title: "Test Event 1", location: "Room A" },
    { time: "11:00 AM", title: "Test Event 2", location: "Room B" },
    { time: "12:00 PM", title: "Test Event 3", location: "Room C" },
    { time: "01:00 PM", title: "Test Event 4", location: "Room D" },
    { time: "02:00 PM", title: "Test Event 5", location: "Room E" },
    { time: "03:00 PM", title: "Test Event 6", location: "Room F" },
  ];
  setSchedule(testData);
  setLoading(false);
}, []);

  if (loading) {
    return (
    <div style={{ padding: "20px" }}>
        <h2>Today's Schedule</h2>
        <p>Loading Schedule...</p>
        </div>
    );
  }

  if (error) {
    return (
        <div style={{ padding: "20px", color: "red"}}>
            <h2>Schedule</h2>
            <p>Error: {error}</p>
            <p>Check.</p>
            </div>
    );
}


  return (
    <div style={{ padding: "20px" }}>
      <h1>Schedule</h1>


    <img
        src={Conferenced}
        alt="Our Company"
        className="mx-auto mb-8 rounded-2x1 max-w-full h-auto shadow-lg"
        />

    <ScheduleTable rows={schedule} />
</div>
    
  );
}

export default Schedule;