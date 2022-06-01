import React from "react";

import Nav from "../navigation/Nav";
import Home from "../home/Home";
import About from "../about/About";
import Portfolio from "../portfolio/Portfolio";
import Contact from "../contact/Contact";

const Left = () => {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Left;
