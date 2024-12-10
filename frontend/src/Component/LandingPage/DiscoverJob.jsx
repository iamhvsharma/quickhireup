import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Img from '../img/role-collection-ot.png'
export default function JobDiscovery() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    [
      { title: "Automation Test Engineer", jobs: "2.3K+" },
      { title: "Cyber Security", jobs: "557" },
      { title: "Technical Architect", jobs: "5.1K+" },
      { title: "Business Analyst", jobs: "4.4K+" },
      { title: "Data Scientist", jobs: "1K+" },
      { title: "Program Manager", jobs: "487" },
    ],
    [
      { title: "Full Stack Developer", jobs: "20.5K+" },
      { title: "Mobile / App Developer", jobs: "2.3K+" },
      { title: "Front End Developer", jobs: "3.5K+" },
      { title: "DevOps Engineer", jobs: "2.2K+" },
      { title: "Engineering Manager", jobs: "1.4K+" },
      { title: "Technical Lead", jobs: "11.4K+" },
    ],
    [
      { title: "Product Manager", jobs: "825" },
      { title: "UI / UX Designer", jobs: "1.4K+" },
      { title: "Research Analyst", jobs: "146" },
      { title: "Branch Manager", jobs: "343" },
      { title: "Functional Consultant", jobs: "3.9K+" },
      { title: "Chartered Accountant", jobs: "774" },
    ],
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="relative bg-blue-50/50 rounded-3xl p-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div className="space-y-4">
            <div className="relative w-58 h-48 mx-auto lg:mx-0">
              <img
                src={Img}
                alt="Illustration"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="space-y-2 text-center lg:text-left">
              <h2 className="text-3xl font-bold">
                Discover jobs across popular roles
              </h2>
              <p className="text-gray-600">
                Select a role and we'll show you relevant jobs for it!
              </p>
            </div>
          </div>

          {/* Right Section - Job Cards */}
          <div className="relative">
            {/* Previous Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-white shadow-lg hover:bg-gray-100"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            {/* Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {slides[currentSlide].map((job, index) => (
                <Card
                  key={index}
                  className="p-4 hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="space-y-2">
                    <h3 className="font-semibold line-clamp-2">{job.title}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">{job.jobs} Jobs</span>
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Next Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-white shadow-lg hover:bg-gray-100"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index
                      ? "w-6 bg-gray-800"
                      : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

