import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/CatergoriesPage.css";
import { getCategories } from "../utils/api";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
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
