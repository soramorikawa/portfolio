import React from "react";
import Nav from "./components/navigation/Nav";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

const App = () => {
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

export default App;
