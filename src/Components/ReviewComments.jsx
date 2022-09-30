//return comments according to 'belongs_to'(the specific game)
import { useEffect, useState } from "react";
import { getReviewComments } from "../utils/api";

const ReviewComments = (props) => {
  const review_id = props.review_id;

  const [comments, setComment] = useState([]);

  useEffect(() => {
    getReviewComments(review_id).then((data) => {
      setComment(data);
    });
  }, []);

  return (
    <section className="ReviewComments">
      <h3>Comments: </h3>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <p>
                {comment.author} commented: {comment.body}
              </p>
              <p>at: {comment.created_at}</p>
              <p>Votes: {comment.votes}</p>
              <br />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
//so close! this page takes a function from api.js, this page is rendered in the app, and it is inserted into ReviewPage so that it can render underneath the reviews.
//the problem: it only renders my h3 title of 'comments' and not the result of the map
export default ReviewComments;
