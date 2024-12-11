import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Features from "./Features";
import Question from "./Questions";

import DiscoverJob from './DiscoverJob'
import Footer from "./Footer";
import Logo from './CompanyLogos'
import WhyChooseUs from './WhyChooseUs'
import InfiniteScrollCard from "./InfiniteScrollCard";
import { AnimatedShinyTextDemo } from "./AnimatedText";
function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FBFAFD]">
      <div className="w-full max-w-7xl space-y-10">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <AnimatedShinyTextDemo />
        <Home />
        <Logo />
        <InfiniteScrollCard />
    
      
        <Features />
        <DiscoverJob />
        <Question />

        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
