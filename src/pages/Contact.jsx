import { HeroReaCont } from "../components/Hero-Rea-Cont/Hero-Rea-Cont";
import { Form } from "../components/Form/Form";

export function Contact() {
  return (
    <>
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
    </>
  );
}
