import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Todo from "./Todo";

export default function Day() {
  /*VARIABLES */
  const { day } = useParams();
  const tasks = useFetch(`http://localhost:3001/tasks?day=${day}`);

  /*FUNCTIONS */

  //purpose: delete the tasks
  function del() {
    tasks.forEach((todo) => {
      if (todo.isDone === true) {
        fetch(`http://localhost:3001/tasks/${todo.id}`, {
          method: "DELETE",
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
          {tasks.map((task) => (
            <Todo task={task} key={task.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
