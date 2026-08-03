import { Phone } from "lucide-react";
import "./Barre-Contact.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

export function BarreContact({ title, sentence }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 9000);
  };
  return (
    <div className="barre-contact">
      <div className="left">
        <h2>{title}</h2>
        <p>{sentence}</p>
      </div>
      <div className="right">
        <a href="tel:0662791443" className="btn-appl" onClick={handleClick}>
          <Phone size={20} />
          {clicked ? "06 62 79 14 43" : "Appeler maintenant"}
        </a>
        <Link to="/contact" className="btn-form">
          Formulaire de contact
        </Link>
      </div>
    </div>
  );
}
