import "./Barre-Info.scss";
import data from "../../../backend/data.json";
import { useEffect, useState } from "react";

function useWindowSize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

export function BarreInfo() {
  const useWidth = useWindowSize();
  const stats = data["stats"];

  const itemsToShow = useWidth <= 768 ? 3 : useWidth <= 1024 ? 4 : 5;
  const visibleItem = stats.slice(0, itemsToShow);
  return (
    <div className="barre-info">
      {visibleItem.map((stat, index) => (
        <div className="container" key={index}>
          <div className="title">{stat.title}</div>
          <div className="desc">{stat.desc}</div>
        </div>
      ))}
    </div>
  );
}
