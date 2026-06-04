import { LocateIcon, Mail, Phone } from "lucide-react";
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

  if (day >= 1 && day <= 5) return time >= 8 && time <= 18;
  if (day === 6) return time >= 9 && time <= 13;
  return false;
}

export function Footer() {
  const isOpen = useIsOpen();
  return (
    <footer>
      <div className="top">
        <div className="left">
          <div className="main-logo">
            <img src="" alt="" />
          </div>
          <p>
            Artisan qualifié RGE, spécialiste de la rénovation intérieure et de
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
              <li>Rénovation Intérieure</li>
              <li>Aménagement Extérieur</li>
              <li>Isolation & Thermique</li>
              <li>Peinture & Finitions</li>
            </ul>
          </div>
          <div className="list">
            <h4>Contact</h4>
            <ul>
              <li>
                <Phone />
                06 62 79 14 43
              </li>
              <li>
                <Mail />
                7artisan87100@gmail.com
              </li>
              <li>
                <LocateIcon />
                Limoges & Nouvelle-Aquitaine
              </li>
            </ul>
          </div>
          <div className="list">
            <h4>Horaires</h4>
            <ul>
              <li>Lundi – Vendredi : 8h – 18h</li>
              <li>Samedi : 9h – 13h</li>
              <li>Dimanche : Fermé</li>
              <li className={`status ${isOpen ? "open" : "close"}`}>
                <span className="dot"></span>
                {isOpen ? "Ouvert" : "Fermé"}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom">
        <p>© 2026 7Artisan. Tous droits réservés.</p>
        <div className="certifications">
          <div className="">Certifié RGE</div>
          <div className="">Qualibat</div>
          <div className="">Assurance décennale</div>
        </div>
      </div>
    </footer>
  );
}
