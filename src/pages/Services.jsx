import { HeroServices } from "../components/Hero-Service/Hero-Service";
import { ShowServices } from "../components/Show-Services/Show-Services";
import { BarreContact } from "../components/Barre-Contact/Barre-Contact";

export function Services() {
  return (
    <>
      <HeroServices />
      <ShowServices />
      <BarreContact
        title="Un projet en tête ?"
        sentence="Obtenez un devis détaillé et gratuit pour votre chantier sous 48h."
      />
    </>
  );
}
