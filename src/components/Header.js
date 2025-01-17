import { Link, NavLink } from "react-router-dom";
import logo from "../assets/rp-logo.png";

export default function Header() {
  const getClass = ({ isActive }) => (isActive ? "nav-active" : null);

  return (
    <header className="container">
      <Link to="/">
        <img
          className="logo"
          src={logo}
          alt="RP logo"
          title="RP | Home"
        />
      </Link>

      <nav>
        <NavLink to="/" className={getClass}>
          Home
        </NavLink>
        <NavLink to="/Diplomas" className={getClass}>
          Diplomas
        </NavLink>
        <NavLink to="/saved-courses" className={getClass}>
          Saved Courses
        </NavLink>
        <NavLink to="/faq" className={getClass}>
          FAQ
        </NavLink>
        <NavLink to="/register" className={getClass}>
          Register
        </NavLink>
      </nav>
    </header>
  );
}
