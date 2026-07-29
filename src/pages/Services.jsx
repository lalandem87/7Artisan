import { HeroServices } from "../components/Hero-Service/Hero-Service";
import { ShowServices } from "../components/Show-Services/Show-Services";
import { BarreContact } from "../components/Barre-Contact/Barre-Contact";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export function Services() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
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
