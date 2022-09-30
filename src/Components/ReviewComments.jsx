//return comments according to 'belongs_to'(the specific game)
import { useEffect, useState } from "react";
import { getReviewComments } from "../utils/api";
import AddComment from "./AddComment";

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
      <AddComment />
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

export default ReviewComments;
