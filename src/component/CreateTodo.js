import { useRef } from "react";
import { useNavigate } from "react-router";

export default function CreateTodo() {
  function onSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:3001/tasks/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // day: Number(day),
        task: taskRef.current.value,
        isDone: false,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("Task Added");
        //navigate(`/`);
      }
    });
  }

  const taskRef = useRef(null);
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
