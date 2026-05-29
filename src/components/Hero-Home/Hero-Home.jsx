import "./Hero-Home.scss";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function HeroHome() {
  return (
    <div className="hero-home">
      <div className="hero-left">
        <div className="badge">Artisan Qualifié RGE — Lyon & Région</div>
        <h1>
          Votre maison, <span>repensée</span> de A à Z
        </h1>
        <p>
          Rénovation, isolation, aménagement extérieur, peinture & finitions.
          Nous transformons vos espaces avec soin, qualité et un devis
          transparent sous 48h.
        </p>
        <div className="buttons">
          <Link to="/contact" className="btn-devis">
            Demander un devis
            <ArrowRight />
          </Link>
          <Link to="/realisations" className="btn-rea">
            Nos réalisations
          </Link>
        </div>
      </div>
      <div className="hero-right">
        <div className="title">Réponse sous 48h</div>
        <p>Décrivez votre projet, nous vous rappelons rapidement.</p>
        <form action="post">
          <input type="text" placeholder="Votre nom complet" />
          <input type="tel" placeholder="Votre téléphone" />
          <select name="type" id="">
            <option value="">Type de travaux</option>
            <option value="">Intérieur</option>
            <option value="">Extérieur</option>
            <option value="">Isolation & Thermique</option>
            <option value="">Peinture & Finitions</option>
          </select>
          <button type="submit">Envoyer ma demande</button>
        </form>
      </div>
    </div>
  );
}
