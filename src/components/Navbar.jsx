import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Navbar({ cart }) {
  // Calculate total number of items in cart
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <Link to="/" className="logo navbar-brand">
          Sugar Lane
        </Link>
        <div className="navbar-links">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart
                {/* Display cart item count */}
                {totalItems > 0 && (
                  <span className="cart-count">{totalItems}</span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
