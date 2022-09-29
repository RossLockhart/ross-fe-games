import { useEffect, useState } from "react";
import "../css/SingleCategory.css";
import { useParams } from "react-router-dom";
import { getReviews } from "../utils/api";

const SingleCategory = () => {
  const [category, setCategory] = useState([]);
  const { category_slug } = useParams();
  useEffect(() => {
    getReviews(category_slug).then((categoryData) => {
      setCategory(categoryData);
    });
  }, [category_slug]);
  return (
    <section className="SingleCategory">
      <h2>Showing reviews for: {category_slug}</h2>

      <ul>
        {category.map((review) => {
          return (
            <li key={review.category}>
              <p className="bold">{review.category}</p>

              <p className="underlined">{review.title}</p>
              <p>
                <b>Review by {review.owner}: </b> {review.review_body}
              </p>
              <p className="bold">
                Review no# {review.review_id} posted at: {review.created_at}
              </p>
              <p className="bold">Votes: {review.votes}</p>
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
