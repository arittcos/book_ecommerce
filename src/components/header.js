import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";

function Header() {
  return (
    <div className="headerContainer">
      <div className="siteLogo">
        <img src={require("../pages/bookSiteLogo.png")} />
      </div>
      <div className="searchOption">
        <input type="text" placeholder="Search books here" name="book" />
        <div className="searchBtn">Search</div>
      </div>
      <Link to="/" className="link">
        <div className="homeBtn">Home</div>
      </Link>
      <Link to="/order-history" className="link">
        <div className="orderHistory">Orders</div>
      </Link>
      <Link to="/login-or-signup" className="link">
        <div className="loginOrLogoutBtn">Login</div>
      </Link>
      <Link to="/cart" className="link">
        <div className="cart">Cart</div>
      </Link>
    </div>
  );
}

export default Header;
