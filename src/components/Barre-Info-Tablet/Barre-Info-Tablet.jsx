import "./Barre-Info-Tablet.scss";

export function BarreInfoTablet() {
  return (
    <section
      className="barre-info-tablet"
      style={{ display: window.innerWidth <= 1024 ? "flex" : "none" }}
    >
      <div className="barre-info-tablet-wrapper">
        <div className="barre-info-tablet-wrapper-logo lug">🧰</div>
        <div className="barre-info-tablet-wrapper-infos">
          <div className="barre-info-tablet-wrapper-infos-title">20 ans</div>
          <div className="barre-info-tablet-wrapper-infos-desc">
            d'expérience
          </div>
        </div>
      </div>
      <div className="barre-info-tablet-wrapper">
        <div className="barre-info-tablet-wrapper-logo people">👥</div>
        <div className="barre-info-tablet-wrapper-infos">
          <div className="barre-info-tablet-wrapper-infos-title">+800</div>
          <div className="barre-info-tablet-wrapper-infos-desc">
            clients satisfaits
          </div>
        </div>
      </div>
      <div className="barre-info-tablet-wrapper">
        <div className="barre-info-tablet-wrapper-logo star">⭐</div>
        <div className="barre-info-tablet-wrapper-infos">
          <div className="barre-info-tablet-wrapper-infos-title">4,9/5</div>
          <div className="barre-info-tablet-wrapper-infos-desc">
            notes moyenne
          </div>
        </div>
      </div>
    </section>
  );
}
