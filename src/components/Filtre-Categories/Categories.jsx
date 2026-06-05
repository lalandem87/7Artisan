import data from "../../../backend/data.json";
import "./Categories.scss";

const allCategories = data["categories"];
const works = data["works"];

export function DisplayCategories({ work, onFilter }) {
  return (
    <div className="categories">
      <button className="categorie active" onClick={() => onFilter(works)}>
        Tous
      </button>
      {allCategories.map((cate) => {
        return (
          <button
            key={cate.id}
            className="categorie"
            onClick={() =>
              onFilter(works.filter((work) => work.categorie_id === cate.id))
            }
          >
            {cate.name}
          </button>
        );
      })}
    </div>
  );
}
