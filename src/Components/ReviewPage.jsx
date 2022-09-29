import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../utils/api";
import "../css/ReviewPage.css";

const ReviewPage = () => {
  const [review, setReview] = useState([]);
  const { review_id } = useParams();

  useEffect(() => {
    getReviewById(review_id).then((reviewData) => {
      setReview(reviewData);
    });
  }, [review_id]);

  return (
    <section className="ReviewPage">
      <h1>Showing reviews for...</h1>
      <article>
        <p className="boldANDunderlined">{review.title}</p>
        <p className="bold">{review.owner}:</p>
        <p>{review.review_body}</p>
        <p className="bold">
          Review no# {review_id} posted at: {review.created_at}
        </p>
        <p className="bold">Votes: {review.votes}</p>
      </article>
    </section>
  );
};
export default ReviewPage;
//for thsi pag you need to set up a use state and then a use affect that uses your utils function.
//it should be a very similar set up to how categoriesPage was set up. the only diff being that we will not return a map but instead just the propeerties of the object in an article, not even as a list
