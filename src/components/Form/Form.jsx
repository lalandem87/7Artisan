import { SiCursor } from "@icons-pack/react-simple-icons";
import {
  Award,
  CircleCheck,
  LockIcon,
  Mail,
  Map,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Navigation,
} from "lucide-react";
import { useState } from "react";
import "./Form.scss";

export function Form() {
  const [budget, setBudget] = useState(null);
  const budgets = [
    "< 5 000 €",
    "5 000 – 15 000 €",
    "15 000 – 30 000 €",
    "> 30 000 €",
  ];
  return (
    <section className="contact-devis">
      <div className="container-form">
        <div className="form-left">
          <div className="coordonees-card">
            <h3>Nos coordonées</h3>
            <div className="wrapper">
              <div className="wrapper-infos">
                <div className="wrapper-infos-logo phone">
                  <Phone color="#F97316" size={20} />
                </div>
                <div className="wrapper-infos-info">
                  <h4>Téléphone</h4>
                  <p>06 62 79 14 43</p>
                  <p>Lundi-Samedi 8h-18h</p>
                </div>
              </div>
              <div className="wrapper-infos">
                <div className="wrapper-infos-logo mail">
                  <Mail color="#2563EB" size={20} />
                </div>
                <div className="wrapper-infos-info">
                  <h4>Email</h4>
                  <p>7artisan87100@gmail.com</p>
                  <p>Réponse sous 24h</p>
                </div>
              </div>
              <div className="wrapper-infos">
                <div className="wrapper-infos-logo mapin">
                  <MapPin color="#0D1117" size={20} />
                </div>
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
                <div className="certif-card-logo award">
                  <Award size={20} />
                </div>
                Qualifié
              </li>
              <li>
                <div className="certif-card-logo shield">
                  <ShieldCheck size={20} />
                </div>
                Assurance décennale
              </li>
              <li>
                <div className="certif-card-logo check">
                  <CircleCheck size={20} />
                </div>
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
          <form action="" method="post">
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
                <option value="">Intérieur</option>
                <option value="">Extérieur</option>
                <option value="">Isolation</option>
                <option value="">Peinture</option>
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
