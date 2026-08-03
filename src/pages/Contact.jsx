import { HeroReaCont } from "../components/Hero-Rea-Cont/Hero-Rea-Cont";
import { Form } from "../components/Form/Form";
import { BarreInfoContact } from "../components/Barre-Info-Contact/Barre-Info-Contact";
import { Helmet } from "react-helmet-async";

export function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact & Devis Gratuit — 7Artisan Limoges</title>
        <meta
          name="description"
          content="Contactez 7Artisan pour un devis gratuit sous 48h. Rénovation, aménagement extérieur, isolation à Limoges et alentours."
        />
        <link rel="canonical" href="https://7artisan.fr/contact" />
      </Helmet>
      <HeroReaCont
        badge="On est la pour vous"
        title="Contact & Devis"
        desc="Parlez-nous de votre projet. Nous vous répondons sous 48h
        avec un devis détaillé et gratuit."
        backColor="#0D1117"
        colorTitle="#fff"
        colorP="#ffffffa8"
      />
      <Form />
      <BarreInfoContact />
    </>
  );
}
