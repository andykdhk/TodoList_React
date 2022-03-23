import { useRef } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

export default function EditTodo() {
  const navigate = useNavigate();
  const { day, id } = useParams();
  const taskRef = useRef(null);

  function onSubmit(e) {
    e.preventDefault();
    console.log(`${day},${id}`);
    fetch(`http://localhost:3001/tasks/${id}`, {
      method: "PUT",
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
        alert("Task Edited");
        navigate(`/`);
      }
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Task: </label>
        <input type="text" placeholder="write here" ref={taskRef}></input>
      </div>
      <button>Edit</button>
    </form>
  );
}
