import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AllReviews from "./Components/AllReviews";

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
        <Routes>
          <Route path="/reviews" element={<AllReviews />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
