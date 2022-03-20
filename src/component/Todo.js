export default function Todo({ task }) {
  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td>{task.task}</td>
      <td>
        <button>Edit</button>
      </td>
    </tr>
  );
}
