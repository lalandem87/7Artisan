import { HeroHome } from "../components/Hero-Home/Hero-Home";
import { BarreInfo } from "../components/Barre-Info/Barre-Info";
import { Expertise } from "../components/Expertise/Expertise";
import { Avis } from "../components/Avis/Avis";
import { BarreContact } from "../components/Barre-Contact/Barre-Contact";
import data from "../../backend/data.json";
import { Helmet } from "react-helmet-async";

const dataAvis = data["avis"];

export function Home() {
  return (
    <>
      <Helmet>
        <title>7Artisan — Rénovation & Aménagement à Limoges</title>
        <meta
          name="description"
          content="Artisan qualifié spécialisé en rénovation intérieure, aménagement extérieur et isolation à Limoges. Devis gratuit sous 48h."
        />
        <meta
          name="keywords"
          content="artisan limoges, rénovation, carrelage, isolation, aménagement extérieur"
        />
        <link rel="canonical" href="https://7artisan.fr" />
      </Helmet>
      <HeroHome />
      <BarreInfo />
      <Expertise />
      <Avis
        badge="Ils nous font confiance"
        title="Ce
        que
        disent
        nos
        clients"
        data={dataAvis}
      />
      <BarreContact
        title="Prêt à transformer votre maison ?"
        sentence="Devis gratuit, réponse sous 48h, sans engagement."
      />
    </>
  );
}
