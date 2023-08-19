import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";

function Navbar() {
  const { items } = useSelector((state) => state.cart);

  return (
    <header className="header">
      <h2>Redux-Toolkit-Store</h2>
      <div className="navbar">
        <ul>
          <li>
            <Link to={`/`} className="navLink">
              Home
            </Link>
          </li>
          <li>
            <Link to={`/cart`} className="navLink">
              Cart
            </Link>
          </li>
          <li>Cart item : {items.length}</li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
