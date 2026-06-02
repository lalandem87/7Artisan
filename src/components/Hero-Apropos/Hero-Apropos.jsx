import "./Hero-Apropos.scss";

export function HeroApropos() {
  return (
    <div className="hero-apropos">
      <div className="left">
        <span className="badge-section">Notre Histoire</span>
        <h1>
          L'artisanat au service <em>de vos projets</em>
        </h1>
        <p>
          Fondée en 2009 par Marc Durand, ArtisanBat est une entreprise
          familiale spécialisée dans la rénovation intérieure et l'aménagement.
          Partis d'un atelier de 2 personnes, nous sommes aujourd'hui une équipe
          de 12 compagnons qualifiés.
        </p>
        <p>
          Notre philosophie : chaque client mérite un interlocuteur unique, un
          suivi rigoureux et une finition irréprochable. C'est cette exigence
          qui a bâti notre réputation dans la région lyonnaise.
        </p>
      </div>
      <div className="right">
        <div className="img-container">
          <img
            src="../../../backend/images/hero-apropos.png"
            alt="Image Hero Apropos"
          />
        </div>
      </div>
    </div>
  );
}
