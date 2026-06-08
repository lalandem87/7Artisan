import { Link } from "react-router-dom";
import "./Expertise.scss";
import {
  ArrowRight,
  House,
  Trees,
  Thermometer,
  PaintBucket,
} from "lucide-react";

const expertises = [
  {
    icon: <House size={28} color="#F97316" />,
    bg: "#FFF4EC",
    title: "Rénovation Intérieure",
    desc: "Cuisine, SDB, cloisons, parquet et plâtrerie.",
  },
  {
    icon: <Trees size={28} color="#2563EB" />,
    bg: "#EFF4FF",
    title: "Aménagement Extérieur",
    desc: "Terrasses, allées, clôtures et portails.",
  },
  {
    icon: <Thermometer size={28} color="#0D1117" />,
    bg: "#FFFBEB",
    title: "Isolation & Thermique",
    desc: "Combles, murs, planchers",
  },
  {
    icon: <PaintBucket size={28} color="#6B7280" />,
    bg: "#F7F8FA",
    title: "Peinture & Finitions",
    desc: "Enduits, béton ciré, faïence et décoration.",
  },
];

export function Expertise() {
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
