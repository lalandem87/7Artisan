import "./Hero-Rea-Cont.scss";

export function HeroReaCont({ badge, title, desc }) {
  return (
    <div className="hero-rea-cont">
      <span className="badge-section">{badge}</span>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
}
