import axios from "axios";

const myApi = axios.create({
  baseURL: "https://fe-games.herokuapp.com/api",
});

export const getReviews = (category_slug) => {
  return myApi
    .get(`/reviews`, {
      params: { category: category_slug },
    })
    .then((res) => {
      return res.data.reviews;
    });
};
export const getReviewById = (review_id) => {
  return myApi.get(`/reviews/${review_id}`).then((res) => {
    return res.data.review;
  });
};
export const getCategories = () => {
  return myApi.get(`/categories`).then((res) => {
    console.log(res.data.categories);
    return res.data.categories;
  });
};
