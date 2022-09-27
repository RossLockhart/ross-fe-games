import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCategorySlug } from "../utils/api";

const SingleCategory = () => {
  const [category, setCategory] = useState([]);
  const { category_slug } = useParams();
  useEffect(() => {
    fetchCategorySlug(category_slug).then((categoryData) => {
      console.log(categoryData);
      setCategory(categoryData);
    });
  }, [category_slug]);
  return (
    <section>
      <h2>Your category is served.....{category_slug}</h2>

      <ul>
        {category.map((review) => {
          console.log(review);
          return (
            <li key={review.category}>
              <p>{review.category}</p>//now you just need to add more properties
              so you can see which game each entry is refering to
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default SingleCategory;
