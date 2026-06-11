import "./Slider.scss";
import data from "../../../backend/data.json";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Fragment, useState } from "react";

export function Slider({ badge, title, works, colorspan }) {
  const [counter, setCounter] = useState(0);
  const visible = works.slice(counter, counter + 3);
  return (
    <div className="container-sliders">
      <div className="top-slider">
        <div className="">
          <span className="badge-slider" style={{ color: colorspan }}>
            {badge}
          </span>
          <h3>{title}</h3>
        </div>
        <div className="dots-wrapper">
          {visible.map((_, index) => {
            return (
              <div
                className={`dot ${index === counter ? "active" : ""}`}
                key={index}
              ></div>
            );
          })}
        </div>
      </div>
      <div className="slider">
        {visible.map((work, index) => {
          return (
            <Fragment key={index}>
              <figure className="card-slider">
                <img
                  src={`../../../backend/images/realisations/${work.imageUrl}`}
                  alt={work.title}
                />
                <div className="card-slider-info">
                  <em style={{ color: work.categorie.color }}>
                    {work.categorie.name}
                  </em>
                  <h4>{work.title}</h4>
                </div>
              </figure>
            </Fragment>
          );
        })}
      </div>
      <div className="buttons-slider">
        <button
          onClick={() => setCounter((c) => Math.max(0, c - 1))}
          id="arrow-left"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={() => setCounter((c) => Math.min(works.length - 3, c + 1))}
          id="arrow-right"
        >
          <ArrowRight />
        </button>
      </div>
      <div className="bottom-slider">
        {counter} — {works.length - 3} réalisations
      </div>
    </div>
  );
}
