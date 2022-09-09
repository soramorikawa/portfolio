import React from "react";
import "./home.css";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiDribbble } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";
import IMG from "../../assets/mainPhoto.png";
import CV from "../../assets/cv.pdf";

const Home = () => {
  return (
    <section id="home">
      <div className="home--container">
        <div className="main-text">
          <div className="hello-text">Hello,</div>
          <div className="name-text">I'm Sora</div>
          <div className="circle-container">
            <div className="circle">
              <a href="https://github.com/soramorikawa" target="_blank">
                <FiGithub />
              </a>
            </div>
            <div className="circle">
              <a
                href="https://www.linkedin.com/in/sora-morikawa/"
                target="_blank"
              >
                <FiLinkedin />
              </a>
            </div>
            <div className="circle">
              <a href="https://dribbble.com/soramorikawa" target="_blank">
                <FiDribbble />
              </a>
            </div>
            <div className="circle">
              <a href={CV} target="_blank">
                <FiFileText />
              </a>
            </div>
          </div>
        </div>
        <div className="home-image">
          <img src={IMG} alt="" />
          {/* <div className="random-box"></div> */}
        </div>
      </div>
    </section>
  );
};

export default Home;
