import { HeroReaCont } from "../components/Hero-Rea-Cont/Hero-Rea-Cont";
import { BarreContact } from "../components/Barre-Contact/Barre-Contact";

export function Realisations() {
  return (
    <>
      <HeroReaCont
        badge="Notre Portfolio"
        title="Nos Réalisations"
        desc="Découvrez une sélection de nos chantiers récents — chaque projet est
      unique et réalisé avec le même niveau d'exigence."
      />
      <BarreContact
        title="Votre projet sera notre prochaine réalisation."
        sentence="Contactez-nous pour un échange gratuit et sans engagement."
      />
    </>
  );
}
