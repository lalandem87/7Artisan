import "./Avis.scss";
import { Star } from "lucide-react";

export function Avis({ badge, title, data }) {
  return (
    <section className="avis">
      <span className="badge-section">{badge}</span>
      <h2>{title}</h2>
      <div className="card-container">
        {data.map((avi) => {
          return (
            <div className="card-avis" key={avi.id}>
              <div className="stars">
                {Array.from({ length: 5 }, (_, i) => {
                  return (
                    <Star
                      key={i}
                      size={16}
                      color="#F97316"
                      fill={i < avi.note ? "#F97316" : "none"}
                    />
                  );
                })}
              </div>
              <p className="avis-commentaire">{avi.commentaire}</p>
              <div className="infos-person">
                <div className="avis-name">{avi.nom}</div>
                <div className="avis-date">{avi.date}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
