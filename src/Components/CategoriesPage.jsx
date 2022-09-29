import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/CatergoriesPage.css";

const CategoriesPage = () => {
  const [categories, selectCategories] = useState([]);
  useEffect(() => {
    fetch("https://fe-games.herokuapp.com/api/categories")
      .then((res) => res.json())
      .then((data) => {
        selectCategories(data.categories);
      });
  }, []);

  return (
    <section className="CategoriesPage">
      <h1>Select a category to see reviews</h1>
      <ul>
        {categories.map((category) => {
          return (
            <li key={category.slug}>
              <Link to={`/categories/${category.slug}`}>
                <p className="boldANDunderlined">{category.slug}</p>
              </Link>

              <p>
                <b>Description: </b>
                {category.description}
              </p>
              <br></br>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default CategoriesPage;
