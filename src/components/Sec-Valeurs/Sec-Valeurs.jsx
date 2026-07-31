import "./Sec-Valeurs.scss";
import data from "../../../backend/data.json";

const dataValeurs = data["valeurs"];

export function SecValeurs() {
  return (
    <section className="valeurs">
      <span className="badge-section">Ce qui nous guide</span>
      <h2>Nos Valeurs</h2>
      <div className="container-card">
        {dataValeurs.map((valeur, index) => {
          return (
            <div
              className="card-valeur"
              key={valeur.id}
              style={{ borderTop: `3px solid ${valeur.color}` }}
            >
              <span
                className="card-valeur-number"
                style={{ color: valeur.color }}
              >
                0{index + 1}
              </span>
              <h3>{valeur.name}</h3>
              <p>{valeur.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
