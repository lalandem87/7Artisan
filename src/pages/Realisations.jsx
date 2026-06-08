import { HeroReaCont } from "../components/Hero-Rea-Cont/Hero-Rea-Cont";
import { BarreContact } from "../components/Barre-Contact/Barre-Contact";
import { Slider } from "../components/Slider/Slider.jsx";
import { useState } from "react";
import data from "../../backend/data.json";

const insideWorks = data["works"].filter(
  (work) => work.categorie.name === "Intérieur",
);
const outsideWorks = data["works"].filter(
  (work) => work.categorie.name === "Extérieur",
);

export function Realisations() {
  return (
    <>
      <HeroReaCont
        badge="Notre Portfolio"
        title="Nos Réalisations"
        desc="Découvrez une sélection de nos chantiers récents — chaque projet est
      unique et réalisé avec le même niveau d'exigence."
      />
      <section className="sliders">
        <Slider
          badge="Intérieur"
          title="Rénovation Intérieur"
          works={insideWorks}
          colorspan="#f97316"
        />
        <Slider
          badge="Extérieur"
          title="Aménagement Extérieur"
          works={outsideWorks}
          colorspan="#2563EB"
        />
      </section>
      <BarreContact
        title="Votre projet sera notre prochaine réalisation."
        sentence="Contactez-nous pour un échange gratuit et sans engagement."
      />
    </>
  );
}
