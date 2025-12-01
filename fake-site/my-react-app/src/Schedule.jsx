import { useEffect, useState } from "react";

function Schedule() {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    fetch("/api/schedule")
      .then((response) => response.json())
      .then((data) => setSchedule(data));
  }, []);

  return (
    <div>
      <h2>Schedule</h2>
      <ul>
        {schedule.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Schedule;