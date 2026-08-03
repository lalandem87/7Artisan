import { HeroReaCont } from "../components/Hero-Rea-Cont/Hero-Rea-Cont";
import { BarreContact } from "../components/Barre-Contact/Barre-Contact";
import { Slider } from "../components/Slider/Slider.jsx";
import { useState } from "react";
import data from "../../backend/data.json";
import { Helmet } from "react-helmet-async";

const insideWorks = data["works"].filter(
  (work) => work.categorie.name === "Intérieur",
);
const outsideWorks = data["works"].filter(
  (work) => work.categorie.name === "Extérieur",
);

export function Realisations() {
  return (
    <>
      <Helmet>
        <title>Nos Réalisations — 7Artisan Limoges</title>
        <meta
          name="description"
          content="Découvrez nos chantiers récents — rénovation de salles de bain, terrasses, isolation et peinture à Limoges et alentours."
        />
        <link rel="canonical" href="https://7artisan.fr/realisations" />
      </Helmet>
      <HeroReaCont
        badge="Notre Portfolio"
        title="Nos Réalisations"
        desc="Découvrez une sélection de nos chantiers récents — chaque projet est
      unique et réalisé avec le même niveau d'exigence."
        backColor="#f8f4f5"
      />
      <section className="sliders">
        <Slider
          badge="Intérieur"
          title="Rénovation Intérieur"
          works={insideWorks}
          colorspan="#b94f04"
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
