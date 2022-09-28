import { Link } from "react-router-dom";

function ReviewCard(props) {
  const review = props.review;
  console.log(22222, review);
  return (
    <li key={review.review_id}>
      <u>
        <Link to={`/reviews/${review.review_id}`}>
          <p>
            <b>{review.title}</b>
          </p>
        </Link>
      </u>
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
//this is going to be used a few times for the sake of review_id page, parts of it will be used for the home page (though with some augmentation), and potemntially again for the categories page
