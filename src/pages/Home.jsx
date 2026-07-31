import { HeroHome } from "../components/Hero-Home/Hero-Home";
import { BarreInfo } from "../components/Barre-Info/Barre-Info";
import { Expertise } from "../components/Expertise/Expertise";
import { Avis } from "../components/Avis/Avis";
import { BarreContact } from "../components/Barre-Contact/Barre-Contact";
import data from "../../backend/data.json";

const dataAvis = data["avis"];

export function Home() {
  return (
    <>
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
