import { useNavigate } from "react-router";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
export default function AddDay() {
  const navigate = useNavigate();
  const [dayNum, setDayNum] = useState();
  const days = useFetch("http://localhost:3001/days");
  const day = days.map((day) => day.day);

  function getDay(e) {
    const found = day.find((element) => element === Number(e.target.value));

    if (found === Number(e.target.value)) {
      //console.log("duplicated", Number(e.target.value));
      alert("Already exist");
    } else {
      setDayNum(e.target.value);
    }
  }
  function addDay() {
    console.log("button activated", dayNum);
    fetch(`http://localhost:3001/days/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: Number(dayNum),
      }),
    }).then((res) => {
      if (res.ok) {
        alert("Day Added");
        navigate(`/`);
      }
    });
  }
  function numCheck() {}
  return (
    <div>
      <div className="dayContainer">
        <h3>Day:</h3>
        <input
          type="number"
          className="inputDay"
          //onChange={(e) => setDayNum(e.target.value)}
          onChange={getDay}
        ></input>
      </div>

      <button onClick={addDay}>Add</button>
    </div>
  );
}
