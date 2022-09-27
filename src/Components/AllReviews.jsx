import { useEffect, useState } from "react";
import "../AllReviews.css";

const AllReviews = () => {
  const [reviews, showAllReviews] = useState([]);
  useEffect(() => {
    fetch("https://fe-games.herokuapp.com/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.reviews);
        showAllReviews(data.reviews);
      });
  }, []);

  return (
    <section className="AllReviews">
      <h1>All reviews</h1>
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.review_id}>
              <p>
                <u>
                  <b>{review.title}</b>
                </u>
              </p>
              <p>
                <b>Category:</b> {review.category}
              </p>
              <img
                src={review.review_img_url}
                width="250"
                height="200"
                alt="review-image"
              ></img>
              <p>
                <b>{review.owner}: </b>
                {review.review_body}
              </p>
              <p>
                <b>Votes: </b>
                {review.votes}
              </p>
              <br></br>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default AllReviews;
