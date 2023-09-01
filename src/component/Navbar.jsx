import React from "react";
import { useState } from "react";
import "./Navbar.scss";
import "../component/contenWrapper/ContentWrapper";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FaTwitter, FaDiscord } from "react-icons/fa";
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const handlechange = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <header>
      <div className={showNavbar ? ` Nav_barMobile` : `Nav_bar`}>
        <span className="logo">TradeCoin</span>
        <ul className="menuItems">
          <li className="menuItem">Home</li>
          <li className="menuItem">Market</li>
          <li className="menuItem">Why us</li>
          <li className="menuItem">Join</li>
        </ul>
        <ul className="icons">
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaDiscord />
          </li>
        </ul>
        <button className="btnburgerMenu" onClick={handlechange}>
          <HiOutlineMenu />
        </button>
        <button className="close-btn" onClick={handlechange}>
          <HiOutlineX />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
