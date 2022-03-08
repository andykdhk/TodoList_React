import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";

export default function DayList() {
  console.log("daylist page loaded");
  let [sortDays, setSort] = useState([]);
  let [days2, setDays] = useState([]);
  let [current, setCurrent] = useState([]);
  let [curPg, setCurrentPg] = useState(0);
  let [lasPg, setLastPg] = useState(4);
  const [gap, setGap] = useState(4);

  let days = useFetch("http://localhost:3001/days")
    .map((day) => day.day)
    .sort((a, b) => a - b);

  useEffect(() => {
    setCurrent(days.slice(0, 4));
  }, []);

  function prevBtn() {
    console.log(curPg, lasPg);
    if (curPg === 0) {
      alert("first page");
    } else if (curPg > days.length) {
      setCurrentPg(curPg - 4);
      setLastPg(lasPg - 4);
      setCurrent(days.slice(curPg, lasPg));
    } else {
      setCurrentPg(curPg - 4);
      setLastPg(lasPg - 4);
      setCurrent(days.slice(curPg - 4, lasPg - 4));
    }
  }

  function nextBtn() {
    if (current.length < 4) {
      alert("last page");
      setCurrentPg(curPg - 4);
      setLastPg(lasPg - 4);
    } else if (curPg === 0) {
      setCurrentPg(curPg + gap);
      setLastPg(lasPg + gap);
      setCurrent(days.slice(curPg + 4, lasPg + 4));
    } else {
      setCurrentPg(curPg + gap);
      setLastPg(lasPg + gap);
      setCurrent(days.slice(curPg + 4, lasPg + 4));
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
          {current.map((day, i) => (
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

// useEffect(() => {
//   fetch("http://localhost:3001/days")
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       setDays(data.map((day) => day.day).sort((a, b) => a - b));
//       return data.map((day) => day.day).sort((a, b) => a - b);
//     })
//     .then((data) => {
//       setCurrent(data.slice(0, 4));
//     });
// }, []);
