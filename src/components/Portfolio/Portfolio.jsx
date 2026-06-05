import "./Portfolio.scss";
import data from "../../../backend/data.json";

const works = data["works"];

function Worklist({ workToDisplay }) {
  return workToDisplay.map((work, index) => {
    return (
      <figure
        className="card-work"
        key={index}
        style={{ gridArea: `card${index}` }}
      >
        <div className="img-wrapper">
          <img
            src={`../../../backend/images/realisations/${work.imageUrl}`}
            alt={work.title}
          />
        </div>
        <div className="card-work_info">
          <em style={{ color: work.categorie.color }}>{work.categorie.name}</em>
          <h3>{work.title}</h3>
        </div>
      </figure>
    );
  });
}

export function Portfolio({ workToDisplay }) {
  return (
    <div className="portfolio">
      <Worklist workToDisplay={workToDisplay} />
    </div>
  );
}
