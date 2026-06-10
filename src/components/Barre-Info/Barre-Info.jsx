import { Briefcase, Users, Star, Award, MapPin } from "lucide-react";
import "./Barre-Info.scss";

export function BarreInfo() {
  return (
    <div className="barre-info">
      <div className="container">
        <div className="logo-svg">
          <Briefcase size={23} color="#F97316" />
        </div>
        <div className="infos">
          <div className="title">20 ans</div>
          <div className="desc">d'expérience</div>
        </div>
      </div>
      <div className="container">
        <div className="logo-svg">
          <Users size={23} color="#F97316" />
        </div>
        <div className="infos">
          <div className="title">+800</div>
          <div className="desc">clients satisfaits</div>
        </div>
      </div>
      <div className="container">
        <div className="logo-svg">
          <Star size={23} color="#F97316" />
        </div>
        <div className="infos">
          <div className="title">4,9/5</div>
          <div className="desc">note moyenne</div>
        </div>
      </div>
      <div className="container">
        <div className="logo-svg">
          <Award size={23} color="#F97316" />
        </div>
        <div className="infos">
          <div className="title">Garantie</div>
          <div className="desc">entreprise qualifiée</div>
        </div>
      </div>
      <div className="container">
        <div className="logo-svg">
          <MapPin size={23} color="#F97316" />
        </div>
        <div className="infos">
          <div className="title">Limoges</div>
          <div className="desc">& International</div>
        </div>
      </div>
    </div>
  );
}
