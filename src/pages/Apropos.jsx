import { HeroApropos } from "../components/Hero-Apropos/Hero-Apropos";
import { BarreInfo } from "../components/Barre-Info/Barre-Info";
import { BarreInfoMobile } from "../components/Barre-Info-Mobile/Barre-Info-Mobile";
import { SecValeurs } from "../components/Sec-Valeurs/Sec-Valeurs";
import { Avis } from "../components/Avis/Avis";
import { BarreContact } from "../components/Barre-Contact/Barre-Contact";
import data from "../../backend/data.json";
import { BarreInfoTablet } from "../components/Barre-Info-Tablet/Barre-Info-Tablet";

const dataAvis = data["avis"];

export function Apropos() {
  return (
    <>
      <HeroApropos />
      <BarreInfo />
      <BarreInfoTablet />
      <BarreInfoMobile />
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
