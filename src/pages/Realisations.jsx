import { HeroReaCont } from "../components/Hero-Rea-Cont/Hero-Rea-Cont";
import { BarreContact } from "../components/Barre-Contact/Barre-Contact";
import { DisplayCategories } from "../components/Filtre-Categories/Categories.jsx";
import { Portfolio } from "../components/Portfolio/Portfolio.jsx";
import { useState } from "react";
import data from "../../backend/data.json";

const works = data["works"];

export function Realisations() {
  const [filtered, setFiltered] = useState(works);
  return (
    <>
      <HeroReaCont
        badge="Notre Portfolio"
        title="Nos Réalisations"
        desc="Découvrez une sélection de nos chantiers récents — chaque projet est
      unique et réalisé avec le même niveau d'exigence."
      />
      <DisplayCategories work={works} onFilter={setFiltered} />
      <Portfolio workToDisplay={filtered} />
      <BarreContact
        title="Votre projet sera notre prochaine réalisation."
        sentence="Contactez-nous pour un échange gratuit et sans engagement."
      />
    </>
  );
}
