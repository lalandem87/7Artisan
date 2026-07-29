import { Link } from "react-router-dom";
import "./Expertise.scss";
import data from "../../../backend/data.json";
import { ArrowRight } from "lucide-react";

export function Expertise() {
  const expertises = data["expertise"];
  return (
    <section className="expertise">
      <span className="badge-section">ce que nous faisons</span>
      <h2>Nos domaines d'expertise</h2>
      <Link to="/services" className="link-all-services">
        Voir tous les services <ArrowRight />
      </Link>
      <div className="container-card">
        {expertises.map((expertise, index) => {
          return (
            <div className="card" key={index}>
              <div
                className="icon-wrapper"
                style={{ backgroundColor: expertise.bg }}
              >
                {expertise.icon}
              </div>
              <h3>{expertise.title}</h3>
              <p>{expertise.desc}</p>
              <Link to="/services">
                En savoir plus <ArrowRight size={16} />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
