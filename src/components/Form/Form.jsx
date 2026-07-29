import { SiCursor } from "@icons-pack/react-simple-icons";
import { Mail, Map, Navigation, Send, LockIcon } from "lucide-react";
import { useRef, useState } from "react";
import "./Form.scss";
import emailjs from "@emailjs/browser";

export function Form() {
  const [budget, setBudget] = useState(null);
  const budgets = [
    "< 5 000 €",
    "5 000 – 15 000 €",
    "15 000 – 30 000 €",
    "> 30 000 €",
  ];

  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vh3mb7e",
        "template_ozu164b",
        formRef.current,
        "K5MerjZpHE1Y-h3RX",
      )
      .then(() => {
        return alert("Message envoyé !");
      })
      .catch((e) => {
        return alert(`Erreur: ${e}, réessayez.`);
      });
  };
  return (
    <section className="contact-devis">
      <div className="container-form">
        <div className="form-left">
          <div className="coordonees-card">
            <h3>Nos coordonées</h3>
            <div className="wrapper">
              <div className="wrapper-infos">
                <div className="wrapper-infos-logo phone">📞</div>
                <div className="wrapper-infos-info">
                  <h4>Téléphone</h4>
                  <p>06 62 79 14 43</p>
                  <p>Lundi-Samedi 8h-18h</p>
                </div>
              </div>
              <div className="wrapper-infos">
                <div className="wrapper-infos-logo mail">✉️</div>
                <div className="wrapper-infos-info">
                  <h4>Email</h4>
                  <p>7artisan87100@gmail.com</p>
                  <p>Réponse sous 24h</p>
                </div>
              </div>
              <div className="wrapper-infos">
                <div className="wrapper-infos-logo mapin">📍</div>
                <div className="wrapper-infos-info">
                  <h4>Zone d'intervention</h4>
                  <p>Limoges & International</p>
                  <p>Région Limousin</p>
                </div>
              </div>
            </div>
          </div>
          <div className="location-card">
            <div className="location-card-top">
              <Map size={32} /> Limoges, Limousin
            </div>
            <div className="location-card-bottom">
              <Navigation size={20} /> Intervention en France et à
              l'International
            </div>
          </div>
          <div className="certif-card">
            <h3>Certifications</h3>
            <ul>
              <li>
                <div className="certif-card-logo award">🎖️</div>
                Qualifié
              </li>
              <li>
                <div className="certif-card-logo shield">🛡️</div>
                Assurance décennale
              </li>
              <li>
                <div className="certif-card-logo check">✅</div>
                Qualité garantie
              </li>
            </ul>
          </div>
        </div>
        <div className="form-right">
          <h2>Demandez votre devis gratuit</h2>
          <p>
            Remplissez ce formulaire, nous vous rappelons sous 48h pour affiner
            votre projet.
          </p>
          <form action="" method="post" onSubmit={handleSubmit} ref={formRef}>
            <div className="rows">
              <div className="row">
                <label htmlFor="prenom">Prénom</label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  placeholder="Votre prénom"
                />
                <label htmlFor="nom">Nom</label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  placeholder="Votre nom"
                />
              </div>
              <div className="row">
                <label htmlFor="phone">Téléphone</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="06 XX XX XX XX"
                />
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="votre@email.fr"
                />
              </div>
            </div>

            <div className="row">
              <label htmlFor="type">Type de travaux</label>
              <select name="type" id="type">
                <option value="">Sélectionnez votre besoin</option>
                <option value="interieur">Intérieur</option>
                <option value="exterieur">Extérieur</option>
                <option value="isolation">Isolation</option>
                <option value="peinture">Peinture</option>
              </select>
            </div>
            <div className="row">
              <label htmlFor="codepostal">Ville / Code postal</label>
              <input
                type="number"
                id="codepostal"
                name="codepostal"
                placeholder="Ex: Lyon 69003"
              />
            </div>
            <div className="row-buttons">
              <div className="row-buttons-title">Budget estimé</div>
              <div className="buttons">
                {budgets.map((b, index) => {
                  return (
                    <button
                      type="button"
                      key={index}
                      className={`budget-btn ${budget === b ? "active" : ""}`}
                      onClick={() => setBudget(b)}
                    >
                      {b}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="row">
              <label htmlFor="desc">Description du projet</label>
              <textarea
                name="desc"
                id="desc"
                placeholder="Décrivez votre projet : pièces concernées, superficie, travaux souhaités..."
              ></textarea>
            </div>

            <div className="form-bottom">
              <button type="submit">
                <Send size={18} />
                Envoyer ma demande de devis
              </button>
              <p>
                <LockIcon size={18} /> Vos données sont protégées
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
