import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";

export default function DayList() {
  console.log("daylist page loaded");

  let [curPg, setCurrentPg] = useState(0);
  let [lasPg, setLastPg] = useState(4);

  let [gap, setGap] = useState(4);

  let x = gap;
  let [order, setOrder] = useState(true);
  const days = useFetch("http://localhost:3001/days");

  function prevBtn() {
    /*first page */
    if (curPg === 0) {
      alert("first page");
    } else if (curPg < gap) {
      console.log("now");
      setCurrentPg(0);
      setLastPg(gap);
    } else {
      setCurrentPg(curPg - gap);
      setLastPg(lasPg - gap);
    }
  }

  function nextBtn() {
    /*last page */
    if (days.length < lasPg) {
      alert("last page");
    } else {
      setCurrentPg(curPg + gap);
      setLastPg(lasPg + gap);
    }
  }

  function sorting(a, b) {
    if (order === true) {
      return a - b;
    } else if (order === false) {
      return b - a;
    }
  }

  function gapBtn() {
    x = x + 1;
    setGap(x);
    if (curPg === 0) {
      setLastPg(x);
    } else {
      setLastPg(curPg + x);
    }
  }
  console.log("currentpg;", curPg, "last pge:", lasPg);
  return (
    <div className="dayList">
      <h2>Daily task List</h2>

      <div className="menu">
        <button onClick={() => setOrder(true)} className="ascOrder">
          Day Mode
        </button>
        <button onClick={() => setOrder(false)} className="dscOrder">
          D-day Mode
        </button>
        <button onClick={gapBtn}>gap: {gap}</button>
      </div>

      <div>
        <ul>
          <button onClick={prevBtn}>Previous</button>
          {days
            .map((day) => day.day)
            .sort((a, b) => sorting(a, b))
            .map((day, i) => (
              <li key={i} className="day">
                <Link to={`/day/${day}`}>Day {day}</Link>
              </li>
            ))
            .slice(curPg, lasPg)}
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

// let days = useFetch("http://localhost:3001/days")
//     .map((day) => day.day)
//     .sort((a, b) => a - b);
//   let x = days;
//   useEffect(() => {
//     //days = days.map((day) => day.day).sort((a, b) => a - b);
//     setCurrent(days.slice(0, 4));
//     console.log("x::", x);
//   }, []);
