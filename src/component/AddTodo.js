export default function AddTodo() {
  return (
    <div>
      <div className="dayContainer">
        <h3>Day:</h3>
        <input type="number" className="inputDay"></input>
      </div>
      <div>
        <button className="add_btn"> Add</button>
      </div>
    </div>
  );
}
