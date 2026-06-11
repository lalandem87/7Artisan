import { NavLink } from "react-router-dom";
import { Phone } from "lucide-react";
import { Nav } from "../Nav/Nav";
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
