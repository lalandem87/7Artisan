import { HeroHome } from "../components/Hero-Home/Hero-Home";
import { BarreInfo } from "../components/Barre-Info/Barre-Info";
import { Expertise } from "../components/Expertise/Expertise";
import { Avis } from "../components/Avis/Avis";
import data from "../../backend/data.json";

const dataAvis = data["avis"].slice(0, 3);

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
    </>
  );
}
