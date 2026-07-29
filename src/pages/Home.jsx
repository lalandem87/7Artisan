import { HeroHome } from "../components/Hero-Home/Hero-Home";
import { BarreInfo } from "../components/Barre-Info/Barre-Info";
import { BarreInfoMobile } from "../components/Barre-Info-Mobile/Barre-Info-Mobile";
import { Expertise } from "../components/Expertise/Expertise";
import { Avis } from "../components/Avis/Avis";
import { BarreContact } from "../components/Barre-Contact/Barre-Contact";
import data from "../../backend/data.json";
import { BarreInfoTablet } from "../components/Barre-Info-Tablet/Barre-Info-Tablet";

const dataAvis = data["avis"];

export function Home() {
  return (
    <>
      <HeroHome />
      <BarreInfo />
      <BarreInfoTablet />
      <BarreInfoMobile />
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
