import { Router } from "./router";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { NavMobile } from "./components/Nav-Mobile/Nav-Mobile";

export function App() {
  return (
    <>
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </>
  );
}
