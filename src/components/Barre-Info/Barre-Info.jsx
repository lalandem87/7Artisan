import "./Barre-Info.scss";

export function BarreInfo() {
  return (
    <div className="barre-info">
      <div className="container">
        <i class="fa-solid fa-suitcase"></i>
        <div className="infos">
          <div className="title">15 ans</div>
          <div className="desc">d'expérience</div>
        </div>
      </div>
      <div className="container">
        <i class="fa-solid fa-user-group"></i>
        <div className="infos">
          <div className="title">+800</div>
          <div className="desc">clients satisfaits</div>
        </div>
      </div>
      <div className="container">
        <i class="fa-regular fa-star"></i>
        <div className="infos">
          <div className="title">4,9/5</div>
          <div className="desc">note moyenne</div>
        </div>
      </div>
      <div className="container">
        <i class="fa-solid fa-certificate"></i>
        <div className="infos">
          <div className="title">RGE</div>
          <div className="desc">certifié Qualibat</div>
        </div>
      </div>
      <div className="container">
        <i class="fa-solid fa-location-dot"></i>
        <div className="infos">
          <div className="title">Limoges</div>
          <div className="desc">& 100km</div>
        </div>
      </div>
    </div>
  );
}
