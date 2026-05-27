import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Home } from "./pages/Home";
import { Apropos } from "./pages/Apropos";
import { Services } from "./pages/Services";
import { Realisations } from "./pages/Realisations";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Home}></Route>
        <Route path="/services" element={Services}></Route>
        <Route path="/realisations" element={Realisations}></Route>
        <Route path="/a-propos" element={Apropos}></Route>
        <Route path="/contact" element={Contact}></Route>
      </Routes>
    </BrowserRouter>
  );
}
