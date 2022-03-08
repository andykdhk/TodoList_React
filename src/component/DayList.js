import { Link } from "react-router-dom";
//import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";

export default function DayList() {
  console.log("daylist page loaded");
  let [sortDays, setSort] = useState([]);
  let [days, setDays] = useState([]);
  let [current, setCurrent] = useState([]);
  let [curPg, setCurrentPg] = useState(0);
  let [lasPg, setLastPg] = useState(0);
  let [val, setVal] = useState(2);
  const [gap, setGap] = useState(4);

  useEffect(() => {
    fetch("http://localhost:3001/days")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDays(data.map((day) => day.day).sort((a, b) => a - b));
        return data.map((day) => day.day).sort((a, b) => a - b);
      })
      .then((data) => {
        setCurrent(data.slice(0, 4));
        setCurrentPg(curPg + gap);
        setLastPg(val * gap);
        setVal(val + 1);
      });
  }, []);
  console.log(days);
  //let sortDays = days.map((day) => day.day).sort((a, b) => a - b);
  function prevBtn() {
    setCurrentPg(curPg - 4);
    setLastPg(curPg - 8);
    // setLastPg(curPg - 4);
    console.log(days.slice(curPg - 8, curPg - 4));
    // console.log(-curPg, -curPg - 4);
    setCurrent(days.slice(lasPg, curPg));
    //console.log();
    console.log(curPg, lasPg, val);
  }

  function nextBtn() {
    if (current.length < 4) {
      alert("last page");
      console.log(days, current);
    } else {
      setCurrentPg(lasPg);
      setLastPg(val * gap);
      setVal(val + 1);
      console.log(curPg, lasPg, val);
      setCurrent(days.slice(curPg, lasPg));
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
