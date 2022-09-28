import axios from "axios";

const myApi = axios.create({
  baseURL: "https://fe-games.herokuapp.com/api",
});

export const fetchCategorySlug = (category_slug) => {
  return myApi.get(`/reviews?category=${category_slug}`).then((res) => {
    return res.data.reviews;
  });
};

export const fetchReviewCard = (review_id) => {
  return myApi.get(`/reviews/${review_id}`).then((res) => {
    return res.data.review;
  });
};
