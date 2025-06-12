import React from "react";
import { Helmet } from "react-helmet-async";

import About from "../components/About";
import Star from "../components/Star";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import CourseList from "../components/Course";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Internfy – Find Internships That Match Your Career</title>
        <meta
          name="description"
          content="Internfy connects students with top internship opportunities. Explore domains, track achievements, and verify your certificates with ease."
        />
        <meta
          name="keywords"
          content="Internfy, internships, student internships, verify certificate, online internship platform"
        />
        <meta property="og:title" content="Internfy – Empowering Internships for Students" />
        <meta
          property="og:description"
          content="Discover your dream internship with Internfy. Learn, grow, and get certified while gaining real-world experience."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.internfy.in/" />
        <meta property="og:image" content="https://www.internfy.in/preview.png" />
        <link rel="canonical" href="https://www.internfy.in/" />
      </Helmet>

      <div>
        <Hero />
        <About />
        <CourseList />
        <Star />
        <Contact />
      </div>
    </>
  );
};

export default Home;
