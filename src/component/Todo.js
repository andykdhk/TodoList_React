import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Todo() {
  const { day } = useParams();

  const tasks = useFetch('http://localhost:3001/tasks?day=${day}`)



  return (
    <div>
      <div>hello</div>
      <table>
        <tbody>
          {tasks.map((task) => (
            <td>task.task</td>
          ))}
        </tbody>
      </table>
    </div>
  );
}
