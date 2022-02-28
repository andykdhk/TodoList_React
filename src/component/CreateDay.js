import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export default function CreateDay() {
  const days = useFetch("http://localhost:3001/days");
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
        alert("생성이 완료 되었습니다");
        navigate.push(`/`);
      }
    });
  }
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
      {/* <h3>현재 일수 : {days.length}일</h3> */}
      <button onClick={addDay}>Add</button>
    </div>
  );
}
