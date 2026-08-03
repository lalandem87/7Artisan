import { HeroServices } from "../components/Hero-Service/Hero-Service";
import { ShowServices } from "../components/Show-Services/Show-Services";
import { BarreContact } from "../components/Barre-Contact/Barre-Contact";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>Nos Services — 7Artisan Limoges</title>
        <meta
          name="description"
          content="Découvrez nos services de rénovation intérieure, aménagement extérieur, isolation thermique et peinture & finitions à Limoges."
        />
        <link rel="canonical" href="https://7artisan.fr/services" />
      </Helmet>
      <HeroServices />
      <ShowServices />
      <BarreContact
        title="Un projet en tête ?"
        sentence="Obtenez un devis détaillé et gratuit pour votre chantier sous 48h."
      />
    </>
  );
}
