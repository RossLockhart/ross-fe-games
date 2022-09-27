import { useEffect, useState } from "react";
import "../css/AllReviews.css";
import SingleReview from "./SingleReview";

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
      <h1>All Reviews</h1>
      <ul>
        {reviews.map((review) => {
          return <SingleReview review={review} />;
        })}
      </ul>
    </section>
  );
};
export default AllReviews;
