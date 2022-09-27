import { Link } from "react-router-dom";
import "../css/Navbar.css";
const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <br />
      <Link to="/reviews">Reviews</Link>
      <br />
      <Link to="/categories">Categories</Link>
      <br />
      <Link to="/singlereview">Here's the review you asked for</Link>
    </nav>
  );
};

export default NavBar;
