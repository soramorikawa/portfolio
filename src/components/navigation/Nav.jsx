import React from "react";
import "./nav.css";
import LOGO from "../../assets/logo.png";
import { useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <div className="big--container">
      <div className="navigation--container">
        <img src={LOGO} alt="Website Logo" className="logo" />
        <nav className="left-nav">
          <a
            href="#"
            onClick={() => setActiveNav("#")}
            className={activeNav === "#" ? "active" : ""}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about" ? "active" : ""}
          >
            About
          </a>
          <a
            href="#portfolio"
            onClick={() => setActiveNav("#portfolio")}
            className={activeNav === "#portfolio" ? "active" : ""}
          >
            Portfolio
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
      {/* <div className="arrow-container">
        <Link to="/personal">
          <BsFillArrowRightCircleFill className="arrow-button" />
        </Link>
      </div> */}
    </div>
  );
};

export default Nav;
