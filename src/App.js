import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/App.css";
import AllReviews from "./Components/AllReviews";
import SingleReview from "./Components/SingleReview";
import Home from "./Components/Home";
import Navbar from "./Components/Nav";

function App() {
  return (
    <BrowserRouter>
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width"
          initial-scale="1.0"
        />
      </head>
      <div className="App">
        <header className="App-header"></header>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<AllReviews />} />
          <Route path="/singlereview" element={<SingleReview />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;