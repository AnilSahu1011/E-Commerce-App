import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
function Navbar({setShowLogin}) {
  const [menu, setMenu] = useState("home");
  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className="navbar">
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link
        to='/'
          onClick={() => {
            setMenu("home");
          }}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a href="#explore-product"
          onClick={() => {
            setMenu("menu");
          }}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          onClick={() => {
            setMenu("mobile-app");
          }}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile-App
        </a>
        <a
        href="#footer"
          onClick={() => {
            setMenu("contact-us");
          }}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <CiSearch className="search-icon" />
        <div className="navbar-search-icon">
          <Link to='/cart'><FaShoppingCart className="shopping-cart-icon" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"} ></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign In </button>
      </div>
    </div>
  );
}

export default Navbar;
