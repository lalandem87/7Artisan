import { SiCursor } from "@icons-pack/react-simple-icons";
import { Map, Navigation, LockIcon } from "lucide-react";
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
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    phone: "",
    email: "",
    type: "",
    codepostal: "",
    budget: "",
    desc: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const formRef = useRef();

  const isValid = Object.values(formData).every((value) => value.length > 0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValid) {
      return setMessage("Tous les champs doivent être remplis");
    }
    emailjs
      .sendForm(
        "service_ke121jm",
        "template_ozu164b",
        formRef.current,
        import.meta.env.VITE_EMAILJS_KEY,
      )
      .then(() => {
        return setMessage("Requête envoyée");
      });
  };
  return (
    <section className="contact-devis">
      <div className="container-form">
        <div className="form-left">
          <div className="coordonees-card">
            <h3>Nos coordonées</h3>
            <div className="wrapper">
              <div className="wrapper-infos tel">
                <h4 className="tel">Téléphone</h4>
                <h5>06 62 79 14 43</h5>
                <p>Lundi-Samedi 8h-18h</p>
              </div>
              <div className="wrapper-infos email">
                <h4 className="email">Email</h4>
                <h5>7artisan87100@gmail.com</h5>
                <p>Réponse sous 24h</p>
              </div>
              <div className="wrapper-infos intervention">
                <h4 className="intervention">Zone d'intervention</h4>
                <h5>Limoges & International</h5>
                <p>Région Limousin</p>
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
                <div className="certif-card-divider qualifie"></div>
                Qualifié
              </li>
              <li>
                <div className="certif-card-divider assurance"></div>
                Assurance décennale
              </li>
              <li>
                <div className="certif-card-divider qualite"></div>
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
                  value={formData.prenom}
                  onChange={handleInputChange}
                  type="text"
                  id="prenom"
                  name="prenom"
                  placeholder="Votre prénom"
                />
                <label htmlFor="nom">Nom</label>
                <input
                  value={formData.nom}
                  onChange={handleInputChange}
                  type="text"
                  id="nom"
                  name="nom"
                  placeholder="Votre nom"
                />
              </div>
              <div className="row">
                <label htmlFor="phone">Téléphone</label>
                <input
                  value={formData.phone}
                  onChange={handleInputChange}
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="06 XX XX XX XX"
                />
                <label htmlFor="email">Email</label>
                <input
                  value={formData.email}
                  onChange={handleInputChange}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="votre@email.fr"
                />
              </div>
            </div>

            <div className="row">
              <label htmlFor="type">Type de travaux</label>
              <select
                name="type"
                id="type"
                onChange={handleInputChange}
                value={formData.type}
              >
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
                value={formData.codepostal}
                onChange={handleInputChange}
                type="number"
                id="codepostal"
                name="codepostal"
                placeholder="Ex: Lyon 69003"
              />
            </div>
            <div className="row-buttons">
              <div className="row-buttons-title">Budget estimé</div>
              <div className="buttons">
                <input type="hidden" name="budget" value={formData.budget} />
                {budgets.map((b, index) => {
                  return (
                    <button
                      type="button"
                      key={index}
                      className={`budget-btn ${budget === b ? "active" : ""}`}
                      onClick={() => {
                        setBudget(b);
                        setFormData({ ...formData, budget: b });
                      }}
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
                onChange={handleInputChange}
                value={formData.desc}
                name="desc"
                id="desc"
                placeholder="Décrivez votre projet : pièces concernées, superficie, travaux souhaités..."
              ></textarea>
            </div>

            <div className="form-bottom">
              <button type="submit">Envoyer ma demande de devis</button>

              <p>
                <LockIcon size={18} /> Vos données sont protégées
              </p>
            </div>
            <p
              className={`message ${message.includes("envoy") ? "success" : "error"}`}
            >
              {message}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
