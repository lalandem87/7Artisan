import { useState } from "react";
import "./Hero-Service.scss";
import data from "../../../backend/data.json";

export function HeroServices() {
  const catServices = data["categorieServices"];
  const [kindService, setKindService] = useState(null);
  return (
    <div className="hero-services">
      <div className="left">
        <span className="badge-section">Notre savoir-faire</span>
        <h1>Nos Services</h1>
        <p>
          Quatre pôles d'expertise pour couvrir l'ensemble de vos besoins en
          rénovation et aménagement.
        </p>
      </div>
      <div className="right">
        <div className="container-card">
          {catServices.map((cs) => (
            <a
              href={`#service-${cs.id}`}
              key={cs.id}
              className={`card ${kindService === cs.id ? "active" : ""}`}
              onClick={() => setKindService(cs.id)}
            >
              <span>{cs.icon}</span>
              {cs.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
