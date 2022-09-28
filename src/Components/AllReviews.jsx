import { useEffect, useState } from "react";
import "../css/AllReviews.css";
import SingleReview from "./SingleReview";

const AllReviews = () => {
  const [reviews, showAllReviews] = useState([]);
  useEffect(() => {
    fetch("https://fe-games.herokuapp.com/api/reviews")
      .then((res) => res.json())
      .then((data) => {
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
    </section> //how it my map still out putting the individual properties i asked for when that logic is now in 'singleReview'
  );
};
export default AllReviews;
