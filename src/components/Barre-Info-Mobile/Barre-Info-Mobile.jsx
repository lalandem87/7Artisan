import { Award, Luggage, Star, Users } from "lucide-react";
import "./Barre-Info-Mobile.scss";

export function BarreInfoMobile() {
  return (
    <section
      className="barre-info-mobile"
      style={{ display: window.innerWidth <= 768 ? "flex" : "none" }}
    >
      <div className="barre-info-mobile-wrapper">
        <div className="barre-info-mobile-wrapper-logo lug">🧰</div>
        <div className="barre-info-mobile-wrapper-infos">
          <div className="barre-info-mobile-wrapper-infos-title">20 ans</div>
          <div className="barre-info-mobile-wrapper-infos-desc">
            d'expérience
          </div>
        </div>
      </div>
      <div className="barre-info-mobile-wrapper">
        <div className="barre-info-mobile-wrapper-logo people">👥</div>
        <div className="barre-info-mobile-wrapper-infos">
          <div className="barre-info-mobile-wrapper-infos-title">+800</div>
          <div className="barre-info-mobile-wrapper-infos-desc">
            clients satisfaits
          </div>
        </div>
      </div>
      <div className="barre-info-mobile-wrapper">
        <div className="barre-info-mobile-wrapper-logo star">⭐</div>
        <div className="barre-info-mobile-wrapper-infos">
          <div className="barre-info-mobile-wrapper-infos-title">4,9/5</div>
          <div className="barre-info-mobile-wrapper-infos-desc">
            notes moyenne
          </div>
        </div>
      </div>
      <div className="barre-info-mobile-wrapper">
        <div className="barre-info-mobile-wrapper-logo award">🎖️</div>
        <div className="barre-info-mobile-wrapper-infos">
          <div className="barre-info-mobile-wrapper-infos-title">Qualité</div>
          <div className="barre-info-mobile-wrapper-infos-desc">
            entreprise qualifié
          </div>
        </div>
      </div>
    </section>
  );
}
