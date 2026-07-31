import { Clock, Euro, Handshake, ShieldCheck } from "lucide-react";
import "./Barre-Info-Contact.scss";

export function BarreInfoContact() {
  return (
    <section className="barre-info-contact">
      <div className="trust-bar">
        <div className="trust-item">
          <p className="trust-title">48h</p>
          <p className="trust-desc">Réponse garantie</p>
        </div>
        <div className="separator" />
        <div className="trust-item">
          <p className="trust-title">100%</p>
          <p className="trust-desc">Devis gratuit</p>
        </div>
        <div className="separator" />
        <div className="trust-item">
          <p className="trust-title">0€</p>
          <p className="trust-desc">Sans engagement</p>
        </div>
        <div className="separator" />
        <div className="trust-item">
          <p className="trust-title">Assuré</p>
          <p className="trust-desc">Artisan qualifié</p>
        </div>
      </div>
    </section>
  );
}
