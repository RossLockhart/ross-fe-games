import { useState } from "react";
import { useParams } from "react-router-dom";
import { postReviewComment } from "../utils/api.js";

function AddComment() {
  const [newComment, setNewComment] = useState("");
  const { review_id } = useParams();
  function postComment(event) {
    event.preventDefault(); //post the comment
    postReviewComment(review_id, newComment, "happyamy2016");
    setNewComment("");
    //add the comment into the statge
    //clear the form of input to be used again
  }
  function handleChange(event) {
    setNewComment(event.target.value);
  }
  return (
    <section className="newComments">
      <form onSubmit={postComment}>
        <label htmlFor="newcomment">Enter your comment here:</label>
        <input type="text" value={newComment} onChange={handleChange} />
        <button>Submit comment</button>
      </form>
    </section>
  );
}

export default AddComment;
