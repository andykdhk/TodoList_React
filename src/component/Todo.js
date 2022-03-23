import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function Todo({ task }) {
  const { day } = useParams();
  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td>{task.task}</td>
      <td>
        <Link to={`/edit_todo/${day}/${task.id}`}>Edit</Link>
      </td>
    </tr>
  );
}
