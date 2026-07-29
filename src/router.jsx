import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Apropos } from "./pages/Apropos";
import { Services } from "./pages/Services";
import { Realisations } from "./pages/Realisations";
import { Contact } from "./pages/Contact";
import { MentionsLegales } from "./pages/MentionsLegales/MentionsLegales";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/realisations" element={<Realisations />} />
      <Route path="/apropos" element={<Apropos />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/mentions-legales" element={<MentionsLegales />} />
    </Routes>
  );
}
