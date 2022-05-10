import React from "react";
import "./nav.css";
import LOGO from "../../assets/logo.png";

const Nav = () => {
  return (
    <div className="navigation--container">
      <img src={LOGO} alt="Website Logo" className="logo" />
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Portfolio</a>
        <a href="#">Personal</a>
        <a href="#" className="contact">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Nav;
