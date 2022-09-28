import axios from "axios";

const myApi = axios.create({
  baseURL: "https://fe-games.herokuapp.com/api",
});

export const fetchCategorySlug = (category_slug) => {
  return myApi.get(`/reviews?category=${category_slug}`).then((res) => {
    return res.data.reviews;
  });
};

// export const fetchSingleReview = (review_id) => {
//   return myApi.get(`/reviews?review_id=${review_id}`).then((res) => {
//     console.log(res.data.reviews.review_id);
//     return res.data.reviews.review_id;
//   });
// };
