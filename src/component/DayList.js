import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";

export default function DayList() {
  const days = useFetch("http://localhost:3001/days");

  let sortDays = days.map((day) => day.day).sort((a, b) => a - b);

  function cutArr() {
    sortDays = sortDays.slice(1);
    console.log(sortDays);
  }
  return (
    <div className="dayList">
      <h2>Daily task List</h2>
      {/* <div className="menu">
        <button>Day Mode</button>
        <button>D-day Mode</button>
      </div> */}

      <div>
        <ul>
          <button>Previous</button>
          {sortDays.map((day, indexNum) => (
            <li key={indexNum} className="day">
              <Link to={`/day/${day}`}>Day {day}</Link>
            </li>
          ))}
          <button onClick={cutArr}>Next</button>
        </ul>
      </div>
    </div>
  );
}

/* {days.map((day) => (
            <li key={day.id} className="day">
              <Link to={`/day/${day.day}`}>Day {day.day}</Link>
            </li>
          ))} */
