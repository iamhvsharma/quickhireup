import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Features from "./Features";
import Question from "./Questions";

import DiscoverJob from './DiscoverJob'
import Footer from "./Footer";
import Logo from './CompanyLogos'
import WhyChooseUs from './WhyChooseUs'
// import InfiniteScrollCard from "./InfiniteScrollCard";
import { AnimatedShinyTextDemo } from "./AnimatedText";
function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      {/* Background pattern and gradient */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>

      {/* Content */}
      <div className="w-full max-w-7xl space-y-10">
        <Navbar />
        <AnimatedShinyTextDemo />
        <Home />
        <Logo />
        <Features />
        <DiscoverJob />
        <Question />
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;