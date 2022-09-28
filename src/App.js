import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/App.css";
import AllReviews from "./Components/AllReviews";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import CategoriesPage from "./Components/CategoriesPage";
import SingleCategory from "./Components/SingleCategory";
import ReviewPage from "./Components/ReviewPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h2>The Table-Top Appraisal Shop&trade;</h2>
          <h3>We don't play around when it comes to game reviews</h3>
        </header>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<AllReviews />} />
          <Route path="/reviews/:review_id" element={<ReviewPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route
            path="/categories/:category_slug"
            element={<SingleCategory />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
