import React from "react";
import "./portfolio.css";
import IMG from "../../assets/IOU-image.png";

const data = [
  {
    id: 1,
    image: IMG,
    title: "IOU",
    github: "https://github.com/acm-projects/IOU",
    demo: "https://drive.google.com/file/d/1QrzW9gjkx0yNbAQO-XUdioSXbXLpq-lL/view?usp=sharing",
  },
  {
    id: 2,
    image: IMG,
    title: "IOU",
    github: "https://github.com/acm-projects/IOU",
    demo: "https://drive.google.com/file/d/1QrzW9gjkx0yNbAQO-XUdioSXbXLpq-lL/view?usp=sharing",
  },
  {
    id: 3,
    image: IMG,
    title: "IOU",
    github: "https://github.com/acm-projects/IOU",
    demo: "https://drive.google.com/file/d/1QrzW9gjkx0yNbAQO-XUdioSXbXLpq-lL/view?usp=sharing",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="portfolio--container">
        <div className="top--container">
          <div>
            <h5>My Recent Work</h5>
            <h1>Portfolio</h1>
          </div>
        </div>
        <div className="bottom--container">
          {data.map(({ id, image, title, github, demo }) => {
            return (
              <article className="portfolio--item">
                <div className="portfolio--item-img">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="buttons">
                  <a href={github} className="github btn" target="_blank">
                    GitHub
                  </a>
                  <a href={demo} className="demo btn" target="_blank">
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
