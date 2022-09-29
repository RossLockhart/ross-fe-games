// import { useEffect, useState } from "react";
import { useEffect } from "react";
import { PatchVoteOnReview } from "../utils/api";
import ReviewCard from "./ReviewCard";

const VoteOnReview = () => {
  const [vote, setVoteCount] = setState({ ...getReviews.votes });
  useEffect(() => {
    PatchVoteOnReview();
  });
};

//1. need to spread current number
//2. need to set up logic ton inc and ddec votes
//3. add buttons for up vote and down vote
//4. need to import axios function to handle the post request

//5. must render optimistically
//6. mu8st return an erro/message if the request does fail

//     const reqBodyUpVote = {
// votes: 1
// }
// const reqBodyDownVote = {
// votes: -1
// }
// const currVoteCount = {...ReviewCard.votes}

//     myApi.PostVoteOnReview().then(voteCount) => {

//     }
// }
