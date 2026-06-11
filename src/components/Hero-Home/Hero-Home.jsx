import "./Hero-Home.scss";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export function HeroHome() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("SERVICE_ID", "TEMPLATE_ID", formRef.current, "PUBLIC_KEY")
      .then(() => {
        return alert("Message envoyé !");
      })
      .catch((e) => {
        return alert(`Erreur: ${e}, réessayez.`);
      });
  };
  return (
    <div className="hero-home">
      <div className="hero-container">
        <div className="hero-left">
          <div className="badge">
            Artisan Qualifié — Limoges & International
          </div>
          <h1>
            Votre maison, <span>repensée</span> de A à Z
          </h1>
          <p>
            Rénovation, isolation, aménagement extérieur, peinture & finitions.
            Nous transformons vos espaces avec soin, qualité et un devis
            transparent sous 48h.
          </p>
          <div className="buttons">
            <Link to="/contact" className="btn-devis-hero">
              Demander un devis
              <ArrowRight />
            </Link>
            <Link to="/realisations" className="btn-rea">
              Nos réalisations
            </Link>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <div className="title">Réponse sous 48h</div>
        <p>Décrivez votre projet, nous vous rappelons rapidement.</p>
        <form action="post" ref={formRef} onSubmit={handleSubmit}>
          <input type="text" placeholder="Votre nom complet" />
          <input type="tel" placeholder="Votre téléphone" />
          <select name="type" id="">
            <option value="">Type de travaux</option>
            <option value="interieur">Intérieur</option>
            <option value="exterieur">Extérieur</option>
            <option value="isolation">Isolation & Thermique</option>
            <option value="peinture">Peinture & Finitions</option>
          </select>
          <button type="submit">Envoyer ma demande</button>
        </form>
      </div>
    </div>
  );
}
