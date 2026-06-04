import data from "../../../backend/data.json";
import "./Categories.scss";

const allCategories = data["categories"];

export function DisplayCategories() {
  return (
    <div className="categories">
      <button className="categorie active">Tous</button>
      {allCategories.map((cate) => {
        return (
          <button key={cate.id} className="categorie">
            {cate.name}
          </button>
        );
      })}
    </div>
  );
}
