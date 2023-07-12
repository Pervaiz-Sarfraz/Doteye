import React from "react";
import Footer from "../components/Footer";
import FutureLine from "../components/FutureLine";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import Contact from "./Contact";
import DotFeature from "./DotFeature";
import HowWeDo from "./HowWeDo";
import WhoAre from "./WhoAre";

function Home() {
  return (
    <>
      <Hero />
      <Slider />
      <WhoAre />
      <HowWeDo />
      <FutureLine />
      <Contact />
      <DotFeature />
      <Footer />
    </>
  );
}

export default Home;
