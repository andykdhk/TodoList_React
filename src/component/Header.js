import { Link } from "react-router-dom";

export default function Header() {
  /*JSX */
  return (
    <div className="header">
      <h1>
        <Link to="/">Home</Link>
      </h1>

      <div className="menu">
        <Link to="/add_todo" className="link">
          day +
        </Link>
      </div>
    </div>
  );
}
