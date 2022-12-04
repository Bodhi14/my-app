import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="nav_components">
        <Link to="/" className="nav_text">
          Home
        </Link>
        <Link to="/about" className="nav_text">
          About
        </Link>
        <Link to="/contact" className="nav_text">
          Contact Me
        </Link>
      </nav>
    </>
  );
}
export default Navbar;
