import "./Nav.scss";
import { NavLink } from "react-router-dom";

export function Nav() {
  return (
    <>
      <nav className="nav-desk">
        <NavLink className="nav-link" to="/">
          Accueil
        </NavLink>
        <NavLink className="nav-link" to="/services">
          Services
        </NavLink>
        <NavLink className="nav-link" to="/realisations">
          Réalisations
        </NavLink>
        <NavLink className="nav-link" to="/apropos">
          A propos
        </NavLink>
        <NavLink className="nav-link" to="/contact">
          Contact
        </NavLink>
      </nav>
    </>
  );
}
