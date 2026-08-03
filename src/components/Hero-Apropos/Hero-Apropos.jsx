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
          Depuis plus de 20 ans, 7Artisan accompagne ses clients dans leurs
          projets de rénovation complète, d'aménagement et de transformation de
          biens. Spécialisés dans les projets clé en main, nous prenons en
          charge l'ensemble des étapes de votre chantier : étude du projet,
          planification, coordination des intervenants et suivi des travaux
          jusqu'à la livraison finale. Grâce à notre réseau de professionnels
          qualifiés et à notre parfaite maîtrise de la coordination de tous les
          corps de métier, nous garantissons une exécution fluide, des délais
          maîtrisés et une qualité irréprochable à chaque étape.
        </p>
        <p></p>
      </div>
      <div className="right">
        <div className="img-container">
          <img src="/images/hero-apropos.png" alt="Image Hero Apropos" />
        </div>
      </div>
    </div>
  );
}
