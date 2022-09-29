import { Link } from "react-router-dom";
import "../css/Navbar.css";
const NavBar = () => {
  return (
    <nav className="GlobalNav">
      <Link className="NavHome" to="/">
        Home
      </Link>
      <Link className="NavReviews" to="/reviews">
        Reviews
      </Link>
      <Link className="NavCategories" to="/categories">
        Categories
      </Link>
    </nav>
  );
};

export default NavBar;

//    <nav className="NavBar">
//       <Link to="/">Home</Link>
//       <br></br>
//       <Link to="/reviews">Reviews</Link>
//       <br></br>
//       <Link to="/categories">Categories</Link>
//     </nav>
//   );
// };
