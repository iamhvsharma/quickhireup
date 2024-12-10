import React from "react";

const mentors = [
  {
    id: 1,
    photo: "https://via.placeholder.com/150",
    name: "John Doe",
    skills: "React, Node.js, MongoDB",
    experience: "5 years",
  },
  {
    id: 2,
    photo: "https://via.placeholder.com/150",
    name: "Jane Smith",
    skills: "Python, Machine Learning",
    experience: "3 years",
  },
  {
    id: 3,
    photo: "https://via.placeholder.com/150",
    name: "Alice Johnson",
    skills: "UI/UX Design, Figma, Tailwind CSS",
    experience: "4 years",
  },
];

const MentorProfiles = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Our Mentors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mentors.map((mentor) => (
          <div
            key={mentor.id}
            className="bg-white shadow-lg rounded-lg p-6 transform hover:-translate-y-2 transition duration-300"
          >
            <img
              src={mentor.photo}
              alt={mentor.name}
              className="w-32 h-32 rounded-full mx-auto"
            />
            <h2 className="text-xl font-bold text-center mt-4">{mentor.name}</h2>
            <p className="text-gray-600 text-center mt-2">
              <strong>Skills:</strong> {mentor.skills}
            </p>
            <p className="text-gray-600 text-center mt-2">
              <strong>Experience:</strong> {mentor.experience}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorProfiles;
