import { NavLink } from "react-router-dom";
import { Phone } from "lucide-react";
import "./Header.scss";

export function Header() {
  return (
    <header>
      <div className="logo">
        <span className="logo-7a">7A</span>
        <span className="logo-rtisan">rtisan</span>
      </div>
      <Nav />
      <NavLink className="btn-devis" to="/contact">
        <Phone height={20} />
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
