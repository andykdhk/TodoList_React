import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import Todo from "./Todo";

export default function Day() {
  /*VARIABLES */
  const { day } = useParams();
  const tasks = useFetch(`http://localhost:3001/tasks?day=${day}`);
  const navigate = useNavigate();
  let [i, setI] = useState(0);

  /*FUNCTIONS */

  //purpose: delete the tasks
  function del() {
    setI(i++);
    tasks.forEach((todo) => {
      console.log("check:", todo.isDone);

      if (todo.isDone === true) {
        fetch(`http://localhost:3001/tasks/${todo.id}`, {
          method: "DELETE",
        }).then((res) => {
          if (res.ok) {
            alert("Task Deleted");

            // navigate(`/day/${day}`);
          }
        });
      }
    });
  }

  /*JSX */
  return (
    <div>
      <div>Todo list</div>
      <div>
        <Link to={`/create_todo/${day}`}>Add</Link>
      </div>

      <button onClick={del}>Delete</button>
      <table>
        <tbody>
          {tasks.map((task, i) => (
            <Todo task={task} key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
