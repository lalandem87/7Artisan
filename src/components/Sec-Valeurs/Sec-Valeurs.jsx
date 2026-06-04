import "./Sec-Valeurs.scss";
import data from "../../../backend/data.json";
import { Clock, Leaf, Euro, ShieldCheck, Headset, Star } from "lucide-react";

const dataValeurs = data["valeurs"];

const valeurIcons = [
  <ShieldCheck />,
  <Clock />,
  <Euro />,
  <Leaf />,
  <Headset />,
  <Star />,
];

export function SecValeurs() {
  return (
    <section className="valeurs">
      <span className="badge-section">Ce qui nous guide</span>
      <h2>Nos Valeurs</h2>
      <div className="container-card">
        {dataValeurs.map((valeur, index) => {
          return (
            <div className="card-valeur" key={valeur.id}>
              <div
                className="icon-wrapper"
                style={{
                  color: valeur["style-icon"].color,
                  background: valeur["style-icon"].backcolor,
                }}
              >
                {valeurIcons[index]}
              </div>
              <h3>{valeur.name}</h3>
              <p>{valeur.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
