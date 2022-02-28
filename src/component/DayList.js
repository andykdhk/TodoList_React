import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function DayList() {
  const days = useFetch("http://localhost:3001/days");

  return (
    <div className="header">
      <h2>Daily task List</h2>
      <div className="menu">
        <button>Day Mode</button>
        <button>D-day Mode</button>
      </div>

      <div className="day">
        <ul>
          {days.map((day) => (
            <li key={day.id}>
              <Link to={`/day/${day.day}`}>Day {day.day}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
