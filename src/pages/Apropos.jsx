import { HeroApropos } from "../components/Hero-Apropos/Hero-Apropos";
import { BarreInfo } from "../components/Barre-Info/Barre-Info";
import { SecValeurs } from "../components/Sec-Valeurs/Sec-Valeurs";
import { Avis } from "../components/Avis/Avis";
import { BarreContact } from "../components/Barre-Contact/Barre-Contact";
import data from "../../backend/data.json";
import { Helmet } from "react-helmet-async";

const dataAvis = data["avis"];

export function Apropos() {
  return (
    <>
      <Helmet>
        <title>À Propos — 7Artisan Limoges</title>
        <meta
          name="description"
          content="Depuis plus de 20 ans, 7Artisan accompagne ses clients dans leurs projets de rénovation clé en main à Limoges et à l'international."
        />
        <link rel="canonical" href="https://7artisan.fr/apropos" />
      </Helmet>
      <HeroApropos />
      <BarreInfo />
      <SecValeurs />
      <Avis
        badge="Avis clients"
        title="Ils nous recommandent"
        data={dataAvis}
      />
      <BarreContact
        title="Rejoignez nos 800+ clients satisfaits"
        sentence="Devis gratuit sous 48h — sans engagement."
      />
    </>
  );
}
