import { NavLink } from "react-router-dom";
import { Phone, X } from "lucide-react";
import "./Nav-Mobile.scss";

export function NavMobile({ onClose }) {
  return (
    <>
      <div className="overlay" onClick={onClose} />
      <nav className="nav-mobile">
        <div className="nav-logo">
          <span>7A</span>
          <span>rtisan</span>
        </div>
        <button className="close-btn" onClick={onClose}>
          <X size={24} />
        </button>
        <NavLink className="nav-link" to="/" onClick={onClose}>
          Accueil
        </NavLink>
        <NavLink className="nav-link" to="/services" onClick={onClose}>
          Services
        </NavLink>
        <NavLink className="nav-link" to="/realisations" onClick={onClose}>
          Réalisations
        </NavLink>
        <NavLink className="nav-link" to="/apropos" onClick={onClose}>
          A propos
        </NavLink>
        <NavLink className="nav-link" to="/contact" onClick={onClose}>
          Contact
        </NavLink>
        <NavLink className="btn-devis" to="/contact" onClick={onClose}>
          <Phone size={18} />
          Devis Gratuit
        </NavLink>
      </nav>
    </>
  );
}
