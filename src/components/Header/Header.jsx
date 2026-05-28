import { NavLink } from "react-router-dom";
import "./Header.scss";

export function Header() {
  return (
    <header>
      <div className="main-logo">
        <img src="" alt="" />
      </div>
      <Nav />
      <NavLink className="btn-devis" to="/contact">
        <i class="fa-solid fa-phone"></i>
        Devis Gratuit
      </NavLink>
    </header>
  );
}

function Nav() {
  return (
    <>
      <nav>
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
