import { Home, Trees, PaintBucket, Thermometer } from "lucide-react";
import "./Hero-Service.scss";

export function HeroServices() {
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
          <div className="card">
            <Home />
            Rénovation intérieure
          </div>
          <div className="card">
            <Trees />
            Aménagement extérieur
          </div>
          <div className="card">
            <Thermometer />
            Isolation & thermique
          </div>
          <div className="card">
            <PaintBucket />
            Peinture & finitions
          </div>
        </div>
      </div>
    </div>
  );
}
