import { useEffect, useState } from "react";
import "./Schedule.css";
import Conferenced from "./assets/Conf_Img.jpg"

const SCHEDULE_API_URL = "http://localhost:3001/api/schedule";

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
  async function fetchSchedule() {
  try {
    const response = await fetch(SCHEDULE_API_URL);
    if (!response.ok) {
      throw new Error(`Failed to load schedule. Server responded with status: ${response.status}`);
  }
  const data = await response.json();
  setSchedule(data);
  setError(null)
} catch (err) {
  console.error("Failed to fetch schedule:", err);
  setError("Could not load schedule.");
} finally {
  setLoading(false);
    }
}

fetchSchedule();
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