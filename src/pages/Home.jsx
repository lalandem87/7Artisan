import { HeroHome } from "../components/Hero-Home/Hero-Home";
import { BarreInfo } from "../components/Barre-Info/Barre-Info";
import { Expertise } from "../components/Expertise/Expertise";

export function Home() {
  return (
    <>
      <HeroHome />
      <BarreInfo />
      <Expertise />
    </>
  );
}
