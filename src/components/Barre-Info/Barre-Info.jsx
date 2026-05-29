import { Briefcase, Users, Star, Award, MapPin } from "lucide-react";
import "./Barre-Info.scss";

export function BarreInfo() {
  return (
    <div className="barre-info">
      <div className="container">
        <Briefcase size={28} color="#F97316" />
        <div className="infos">
          <div className="title">15 ans</div>
          <div className="desc">d'expérience</div>
        </div>
      </div>
      <div className="container">
        <Users size={28} color="#F97316" />
        <div className="infos">
          <div className="title">+800</div>
          <div className="desc">clients satisfaits</div>
        </div>
      </div>
      <div className="container">
        <Star size={28} color="#F97316" />
        <div className="infos">
          <div className="title">4,9/5</div>
          <div className="desc">note moyenne</div>
        </div>
      </div>
      <div className="container">
        <Award size={28} color="#F97316" />
        <div className="infos">
          <div className="title">RGE</div>
          <div className="desc">certifié Qualibat</div>
        </div>
      </div>
      <div className="container">
        <MapPin size={28} color="#F97316" />
        <div className="infos">
          <div className="title">Limoges</div>
          <div className="desc">& 100km</div>
        </div>
      </div>
    </div>
  );
}
