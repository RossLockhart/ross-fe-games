import { useEffect, useState } from "react";
import "../css/SingleCategory.css";
import { useParams } from "react-router-dom";
import { fetchCategorySlug } from "../utils/api";

const SingleCategory = () => {
  const [category, setCategory] = useState([]);
  const { category_slug } = useParams();
  useEffect(() => {
    fetchCategorySlug(category_slug).then((categoryData) => {
      setCategory(categoryData);
    });
  }, [category_slug]);
  return (
    <section className="SingleCategory">
      <h2>Your category is served.....{category_slug}</h2>

      <ul>
        {category.map((review) => {
          return (
            <li key={review.category}>
              <b>
                <p>
                  <u>{review.category}</u>
                </p>
              </b>
              <p>
                <u>{review.title}</u>
              </p>
              <p>
                <b>Review:</b> {review.review_body}
              </p>
              <img
                src={review.review_img_url}
                width="250"
                height="200"
                alt="review-image"
              ></img>
              <br></br>
              <br></br>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default SingleCategory;
