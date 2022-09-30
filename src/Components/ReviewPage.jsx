import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById, PatchVoteOnReview } from "../utils/api";
import ErrorPage from "./ErrorPage";
import "../css/ReviewPage.css";
import ReviewComments from "./ReviewComments";

const ReviewPage = () => {
  const [newVote, setNewVote] = useState(0);
  const [error, setError] = useState(false);
  const [review, setReview] = useState([]);
  const { review_id } = useParams();

  const addVote = (VoteValue) => {
    setNewVote((currVoteValue) => (currVoteValue += VoteValue));
    PatchVoteOnReview(review.review_id, VoteValue).catch((err) => {
      setNewVote((currVoteValue) => (currVoteValue -= VoteValue));
      setError(true);
    });
  };

  useEffect(() => {
    getReviewById(review_id)
      .then((reviewData) => {
        setReview(reviewData);
        setError(false);
      })
      .catch((err) => {
        setError(true);
      });
  }, [review_id]);

  if (error === true) {
    return <ErrorPage />;
  } else {
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
          <p className="bold">Votes: {review.votes + newVote}</p>
          <button onClick={() => addVote(1)}>UpVote</button>
          <button onClick={() => addVote(-1)}>DownVote</button>
          <ReviewComments review_id={review_id} />
        </article>
      </section>
    );
  }
};
export default ReviewPage;
