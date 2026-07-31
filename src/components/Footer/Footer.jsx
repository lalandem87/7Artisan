import { NavLink } from "react-router-dom";
import "./Footer.scss";
import {
  SiInstagram,
  SiFacebook,
  SiSnapchat,
} from "@icons-pack/react-simple-icons";

function useIsOpen() {
  const now = new Date();
  const day = now.getDay();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const time = hours + minutes / 60;

  if (day >= 1 && day <= 6) return time >= 8 && time <= 18;
  return false;
}

export function Footer() {
  const isOpen = useIsOpen();
  return (
    <footer>
      <div className="top">
        <div className="left">
          <div className="logo">
            <span className="logo_7a">7A</span>
            <span className="logo_rtisan">rtisan</span>
          </div>
          <p>
            Artisan qualifié, spécialiste de la rénovation intérieure et de
            l'aménagement depuis 20 ans.
          </p>
          <div className="social-links">
            <a href="#">
              <SiFacebook size={20} color="#fff" />
            </a>
            <a href="#">
              <SiInstagram size={20} color="#fff" />
            </a>
            <a href="#">
              <SiSnapchat size={20} color="#fff" />
            </a>
          </div>
        </div>
        <div className="right">
          <div className="list">
            <h4>Nos Services</h4>
            <ul>
              <li>
                <NavLink to="/services#service-0">
                  Rénovation Intérieure
                </NavLink>
              </li>
              <li>
                <NavLink to="/services#service-1">
                  Aménagement Extérieur
                </NavLink>
              </li>
              <li>
                <NavLink to="/services#service-2">
                  Isolation & Thermique
                </NavLink>
              </li>
              <li>
                <NavLink to="/services#service-3">Peinture & Finitions</NavLink>
              </li>
            </ul>
          </div>
          <div className="list">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="tel:0662791443">06 62 79 14 43</a>
              </li>
              <li>
                <a href="mailto:7artisan87100@gmail.com">
                  7artisan87100@gmail.com
                </a>
              </li>
              <li>Limoges & International</li>
            </ul>
          </div>
          <div className="list">
            <h4>Horaires</h4>
            <ul>
              <li>Lundi – Vendredi : 8h – 18h</li>
              <li>Samedi : 8h – 18h</li>
              <li>Dimanche : Fermé</li>
              <div className={`status ${isOpen ? "open" : "close"}`}>
                <span className="dot"></span>
                {isOpen ? "Ouvert" : "Fermé"}
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom">
        <p>© {new Date().getFullYear()} 7Artisan. Tous droits réservés.</p>
        <div className="certifications">
          <NavLink to="/mentions-legales" onClick={() => scrollTo(0, 0)}>
            Mentions légales
          </NavLink>
          <div className=""></div>
          <div className="">Assurance décennale</div>
        </div>
      </div>
    </footer>
  );
}
