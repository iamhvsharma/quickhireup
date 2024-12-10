import React from "react";
import { Button } from "@/components/ui/button";

export function SpecialistsSection() {
  const specialists = [
    {
      name: "John Smith",
      role: "Career Coach",
      image: "/placeholder.svg",
      rating: 4.9,
      reviews: 128,
      skills: ["Resume Building", "Interview Prep", "Career Transition"],
    },
    {
      name: "Sarah Johnson",
      role: "Leadership Mentor",
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 93,
      skills: ["Team Management", "Leadership Skills", "Conflict Resolution"],
    },
    {
      name: "Michael Brown",
      role: "Tech Industry Expert",
      image: "/placeholder.svg",
      rating: 4.9,
      reviews: 156,
      skills: ["Full Stack Development", "AI/ML", "Cloud Computing"],
    },
    {
      name: "Emily Davis",
      role: "Business Strategy",
      image: "/placeholder.svg",
      rating: 4.7,
      reviews: 84,
      skills: ["Market Analysis", "Strategic Planning", "Budgeting"],
    },
  ];

  return (
    <section className="py-12 bg-gray-50 flex justify-center items-center min-h-screen">
      <div className="container items-center">
        <h2 className="text-3xl font-bold text-center mb-2">
          Find your specialist
        </h2>
        <p className="text-center text-gray-500 mb-8">among 1000+ experts</p>
        <div className="flex justify-center gap-2 mb-8">
          {["Skills", "Industry", "Experience", "Price", "Country", "Language"].map((filter) => (
            <Button key={filter} variant="outline" size="sm">
              {filter}
            </Button>
          ))}
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {specialists.map((specialist, index) => (
            <div key={index} className="border rounded-lg p-4 bg-white shadow-sm">
              {/* Image */}
              <div className="relative w-full aspect-square mb-4">
                <img
                  src={specialist.image}
                  alt={specialist.name}
                  className="object-cover rounded-lg w-full h-full"
                />
              </div>
              {/* Name and Role */}
              <h3 className="font-semibold">{specialist.name}</h3>
              <p className="text-gray-500 text-sm">{specialist.role}</p>
              {/* Rating */}
              <div className="flex items-center mt-2">
                <span className="text-yellow-400">★</span>
                <span className="ml-1">{specialist.rating}</span>
                <span className="text-gray-500 text-sm ml-2">
                  ({specialist.reviews} reviews)
                </span>
              </div>
              {/* Skills */}
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {specialist.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button size="lg">Find mentor</Button>
        </div>
      </div>
    </section>
  );
}
