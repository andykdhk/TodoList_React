import { useNavigate } from "react-router";
import { useState } from "react";

export default function CreateDay() {
  const navigate = useNavigate();
  const [dayNum, setDayNum] = useState();

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
        navigate.push(`/`);
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
          onChange={(e) => setDayNum(e.target.value)}
        ></input>
      </div>

      <button onClick={addDay}>Add</button>
    </div>
  );
}
