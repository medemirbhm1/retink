import logo from "../images/Logo.svg";
import "./nav.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="nav">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </nav>
  );
}

export default Nav;
