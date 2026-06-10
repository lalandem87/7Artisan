import { Clock, Euro, Handshake, ShieldCheck } from "lucide-react";
import "./Barre-Info-Contact.scss";

export function BarreInfoContact() {
  return (
    <section className="barre-info-contact">
      <div className="barre-info-contact-container">
        <div className="barre-info-contact-container-logo">
          <Clock />
        </div>
        <p>Réponse sous 48h</p>
      </div>
      <div className="barre-info-contact-container">
        <div className="barre-info-contact-container-logo">
          <Euro />
        </div>
        <p>Devis 100% gratuit</p>
      </div>
      <div className="barre-info-contact-container">
        <div className="barre-info-contact-container-logo">
          <Handshake />
        </div>
        <p>Sans engagement</p>
      </div>
      <div className="barre-info-contact-container">
        <div className="barre-info-contact-container-logo">
          <ShieldCheck />
        </div>
        <p>Artisan assuré</p>
      </div>
    </section>
  );
}
