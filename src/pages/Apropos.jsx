import { HeroApropos } from "../components/Hero-Apropos/Hero-Apropos";
import { BarreInfo } from "../components/Barre-Info/Barre-Info";
import { SecValeurs } from "../components/Sec-Valeurs/Sec-Valeurs";
import { Avis } from "../components/Avis/Avis";
import { BarreContact } from "../components/Barre-Contact/Barre-Contact";
import data from "../../backend/data.json";

const dataAvis = data["avis"].slice(3, 6);

export function Apropos() {
  return (
    <>
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
