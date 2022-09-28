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
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => {
          return (
            <li key={category.slug}>
              <u>
                <Link to={`/categories/${category.slug}`}>
                  <p>{category.slug}</p>
                </Link>
              </u>
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
