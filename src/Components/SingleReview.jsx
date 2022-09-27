function SingleReview(props) {
  const review = props.review;
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
}
export default SingleReview;
//this is going to be used a few times for the sake of review_id page, parts of it will be used for the home page (though with some augmentation), and potemntially again for the categories page
