import { Link } from "react-router-dom";
//import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";

export default function DayList() {
  console.log("daylist page loaded");
  let [sortDays, setSort] = useState([]);
  const [days, setDays] = useState([]);
  let [current, setCurrent] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/days")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDays(data.map((day) => day.day).sort((a, b) => a - b));
      });
  }, []);

  //let sortDays = days.map((day) => day.day).sort((a, b) => a - b);
  function prevBtn() {
    setDays(days.slice(-1));
  }
  function nextBtn() {
    if (days.length >= 4) {
      setDays(days.slice(4));
    } else {
      alert("last pages");
    }
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
          <button onClick={prevBtn}>Previous</button>
          {days.map((day, i) => (
            <li key={i} className="day">
              <Link to={`/day/${day}`}>Day {day}</Link>
            </li>
          ))}
          <button onClick={nextBtn}>Next</button>
        </ul>
      </div>
    </div>
  );
}

/* {days.map((day) => (
            <li key={day.id} className="day">
              <Link to={`/day/${day.day}`}>Day {day.day}</Link>
            </li>
          ))} 
          {current.map((day, i) => (
            <li key={i} className="day">
              <Link to={`/day/${day}`}>Day {day}</Link>
            </li>
          ))}*/
