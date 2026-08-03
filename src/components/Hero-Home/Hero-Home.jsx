import "./Hero-Home.scss";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export function HeroHome() {
  const [formData, setFormData] = useState({
    nom: "",
    phone: "",
    type: "",
  });
  const [message, setMessage] = useState("");

  const formRef = useRef();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const isValid = Object.values(formData).every((val) => val.length > 0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValid) {
      setMessage("Veuillez remplir tous les champs !");
      return;
    }

    emailjs
      .sendForm(
        "service_ke121jm",
        "template_r3ejj2x",
        formRef.current,
        import.meta.env.VITE_EMAILJS_KEY,
      )
      .then(() => {
        return setMessage("Message envoyé");
      })
      .catch((e) => {
        return console.log(`Erreur: ${e}, réessayez.`);
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
          <input
            type="text"
            placeholder="Votre nom complet"
            id="nom"
            name="nom"
            onChange={handleInputChange}
            value={formData.nom}
          />
          <input
            type="tel"
            placeholder="Votre téléphone"
            id="phone"
            name="phone"
            onChange={handleInputChange}
            value={formData.phone}
          />
          <select
            name="type"
            id="type"
            onChange={handleInputChange}
            value={formData.type}
          >
            <option value="">Type de travaux</option>
            <option value="interieur">Intérieur</option>
            <option value="exterieur">Extérieur</option>
            <option value="isolation">Isolation & Thermique</option>
            <option value="peinture">Peinture & Finitions</option>
          </select>
          <button type="submit">Envoyer ma demande</button>
          {message && (
            <p
              className={`message ${message.includes("envoy") ? "success" : "error"}`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
