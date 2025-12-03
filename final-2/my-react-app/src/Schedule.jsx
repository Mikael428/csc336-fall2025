import { useEffect, useState } from "react";


function Schedule() {
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/schedule")
    .then((response) => {
      if (!response.ok) throw new Error("Failed");
      return response.json();
    })
      .then((data) => {
        setSchedule(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
    <div>
        <h2>Schedule</h2>
        <p>Loading Schedule...</p>
    </div>
    )
  }


  return (
    <div>
      <h2>Schedule</h2>
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Event</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((item, idx) => (
              <tr key={idx}>
                <td>{item.time}</td>
                <td>{item.title}</td>
                <td>{item.location || "TBD"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Schedule;