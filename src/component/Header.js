import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <h1>
        <Link to="/">Home</Link>
      </h1>

      <div className="menu">
        <Link to="/add_day" className="link">
          todo +
        </Link>
      </div>
    </div>
  );
}
