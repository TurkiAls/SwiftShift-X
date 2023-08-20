import React from "react";
import Hero2 from "../components/Hero2"
import Services2 from "../parts/Services2"
import About2 from "../parts/About2";
import AboutUs2 from "../parts/AboutUs2";
import Blog2 from "../parts/Blog2"
import Contact2 from "../parts/Contact2";
import Team2 from "../parts/Team/index2"; // Add this import

import Aos from "aos";
import "aos/dist/aos.css";

const LandingPage2 = () => {
  Aos.init();

  return (
    <div>
      <Hero2 />
      <AboutUs2 />
      <About2 />
      <Services2 />
      <Team2 /> {/* Use the Team2 component here */}
      <Contact2 />
    </div>
  );
};

export default LandingPage2;
