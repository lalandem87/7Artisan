import "./Barre-Contact.scss";
import { Link } from "react-router-dom";

export function BarreContact({ title, sentence }) {
  return (
    <div className="barre-contact">
      <div className="left">
        <h2>{title}</h2>
        <p>{sentence}</p>
      </div>
      <div className="right">
        <a href="" className="btn-appl">
          📞 Appeler maintenant
        </a>
        <Link to="/contact" className="btn-form">
          Formulaire de contact
        </Link>
      </div>
    </div>
  );
}
