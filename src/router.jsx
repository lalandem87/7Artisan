import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Apropos } from "./pages/Apropos";
import { Services } from "./pages/Services";
import { Realisations } from "./pages/Realisations";
import { Contact } from "./pages/Contact";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/realisations" element={<Realisations />} />
      <Route path="/a-propos" element={<Apropos />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
