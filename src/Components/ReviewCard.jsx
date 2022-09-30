import { Link } from "react-router-dom";

function ReviewCard(props) {
  const review = props.review;
  return (
    <li>
      <Link to={`/reviews/${review.review_id}`}>
        <p className="boldANDunderlined">{review.title}</p>
      </Link>

      <p>
        <b>Category:</b> {review.category}
      </p>
      <img
        src={review.review_img_url}
        width="250"
        height="200"
        alt="review-image"
      ></img>
    </li>
  );
}
export default ReviewCard;
