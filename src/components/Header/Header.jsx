import { NavLink } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Nav } from "../Nav/Nav";
import "./Header.scss";
import { useState } from "react";
import { NavMobile } from "../Nav-Mobile/Nav-Mobile";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 9000);
  };
  return (
    <header>
      <NavLink className="logo" to="/">
        <span>7A</span>
        rtisan
      </NavLink>
      <Nav />
      <div className="btn-devis" onClick={handleClick}>
        <Phone height={20} />
        {clicked ? "06 62 79 14 43" : "Devis Gratuit"}
      </div>
      <button className="close-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X /> : <Menu />}
      </button>
      {menuOpen && <NavMobile onClose={() => setMenuOpen(false)} />}
    </header>
  );
}
