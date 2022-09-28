import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewCard } from "../utils/api";
import "../css/ReviewPage.css";

const ReviewPage = () => {
  const [review, setReview] = useState([]);
  const { review_id } = useParams();

  useEffect(() => {
    fetchReviewCard(review_id).then((reviewData) => {
      setReview(reviewData);
    });
  }, [review_id]);
  console.log(666666, review);
  return (
    <section className="ReviewPage">
      <h1>Showing reviews for...</h1>
      <article>
        <p>
          <b>{review.title}</b>
        </p>
        <p>
          <b>{review.owner}:</b>
        </p>
        <p>{review.review_body}</p>
        <p>
          <b>Review no# {review_id} posted at: </b> {review.created_at}
        </p>
        <p>
          <b>Votes:</b> {review.votes}
        </p>
      </article>
    </section>
  );
};
export default ReviewPage;
//for thsi pag you need to set up a use state and then a use affect that uses your utils function.
//it should be a very similar set up to how categoriesPage was set up. the only diff being that we will not return a map but instead just the propeerties of the object in an article, not even as a list
