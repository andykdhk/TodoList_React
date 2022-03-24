import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function Todo({ task }) {
  const { day } = useParams();
  const [isDone, setIsDone] = useState(task.isDone);

  function toggleDone() {
    //console.log(isDone);
    fetch(`http://localhost:3001/tasks/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...task,
        isDone: !isDone,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  }

  return (
    <tr>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone} />
      </td>
      <td>{task.task}</td>
      <td>
        <Link to={`/edit_todo/${day}/${task.id}`}>Edit</Link>
      </td>
    </tr>
  );
}
