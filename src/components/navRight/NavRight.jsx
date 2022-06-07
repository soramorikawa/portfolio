import React from "react";
import "./navRight.css";
import LOGO from "../../assets/logo.png";
import { useState } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const NavRight = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <div className="big--container">
      <div className="navigation--container">
        <img src={LOGO} alt="Website Logo" className="logo" />
        <nav className="right-nav">
          <a
            href="#"
            onClick={() => setActiveNav("#")}
            className={activeNav === "#" ? "active" : ""}
          >
            Favorites
          </a>
          <a
            href="#about"
            onClick={() => setActiveNav("#music")}
            className={activeNav === "#about" ? "active" : ""}
          >
            Music
          </a>
          <a
            href="#contact"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#contact" ? "active" : ""}
          >
            Contact
          </a>
        </nav>
      </div>
      <div className="arrow-container">
        <Link to="/">
          <BsArrowLeftCircle className="arrow-button-right" />
        </Link>
      </div>
    </div>
  );
};

export default NavRight;
