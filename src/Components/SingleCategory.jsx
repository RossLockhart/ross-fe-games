import { useEffect, useState } from "react";
import "../css/SingleCategory.css";
import { useParams } from "react-router-dom";
import { getReviews } from "../utils/api";
import { Link } from "react-router-dom";

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

              <Link to={`/reviews/${review.review_id}`}>
                <p className="underlined">{review.title}</p>
              </Link>
              <p className="bold">
                Review no# {review.review_id} posted by {review.owner} at:{" "}
                {review.created_at}
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
