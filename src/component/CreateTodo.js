import { useRef } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

export default function CreateTodo() {
  const navigate = useNavigate();
  const { day } = useParams();
  const taskRef = useRef(null);

  function onSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:3001/tasks/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: `${day}`,
        task: taskRef.current.value,
        isDone: false,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("Task Added");
        navigate(`/day/${day}`);
      }
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Task: </label>
        <input type="text" placeholder="write here" ref={taskRef}></input>
      </div>
      <button>Add</button>
    </form>
  );
}
