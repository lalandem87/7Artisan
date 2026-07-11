import { NavLink } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Nav } from "../Nav/Nav";
import "./Header.scss";
import { useState } from "react";
import { NavMobile } from "../Nav-Mobile/Nav-Mobile";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
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
      <button className="close-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X /> : <Menu />}
      </button>
      {menuOpen && <NavMobile onClose={() => setMenuOpen(false)} />}
    </header>
  );
}
