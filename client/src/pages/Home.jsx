import React  from "react";

import About from "../components/About";
import Star from "../components/Star";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Course from "../components/Course";



const Home = () => {
  return (
    <>
      <div>
        <Hero />

        <About />
        <Course />
        <Star />
        <Contact />
      </div>

      
    </>
  );
};

export default Home;
