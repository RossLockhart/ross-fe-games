import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <br />
      <Link to="/reviews">Reviews</Link>
    </nav>
  );
};

export default NavBar;
