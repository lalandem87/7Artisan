import "./Hero-Rea-Cont.scss";

export function HeroReaCont({
  badge,
  title,
  desc,
  backColor,
  colorTitle,
  colorP,
}) {
  return (
    <div className="hero-rea-cont" style={{ background: backColor }}>
      <span className="badge-section">{badge}</span>
      <h1 style={{ color: colorTitle }}>{title}</h1>
      <p style={{ color: colorP }}>{desc}</p>
    </div>
  );
}
