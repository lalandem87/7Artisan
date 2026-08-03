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
                className="badge"
                style={{
                  color: expertise.badge.color,
                  backgroundColor: expertise.badge.backcolor,
                }}
              >
                {expertise.badge.name}
              </div>
              <div className="card_infos">
                <h3>{expertise.title}</h3>
                <p>{expertise.desc}</p>
                <ul>
                  {expertise.list.map((l, index) => (
                    <li key={index}>
                      <em style={{ color: expertise.badge.color }}>—</em> {l}
                    </li>
                  ))}
                </ul>
              </div>
              <Link to={`/services${expertise.link}`}>
                En savoir plus <ArrowRight size={16} />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
