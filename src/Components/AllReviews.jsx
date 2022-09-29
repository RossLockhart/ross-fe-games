import { useEffect, useState } from "react";
import "../css/AllReviews.css";
import { getReviews } from "../utils/api";
import ReviewCard from "./ReviewCard";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getReviews().then((data) => {
      setReviews(data);
    });
  }, []);

  return (
    <section className="AllReviews">
      <h1>Select a game title to see reviews</h1>
      <ul>
        {reviews.map((review) => {
          return <ReviewCard review={review} />;
        })}
      </ul>
    </section> //how it my map still out putting the individual properties i asked for when that logic is now in 'singleReview'
  );
};
export default AllReviews;
