import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CategoriesSection = () => {
  const specialists = [
    {
      name: "John Smith",
      role: "Career Coach",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHNlbGYlMjBkaXNjb3Zlcnl8ZW58MHx8fHwxNjg5NzY0NzY3&ixlib=rb-1.2.1&q=80&w=400",
      rating: 4.9,
      reviews: 128,
      skills: ["Resume Building", "Interview Prep", "Career Transition"],
    },
    {
      name: "Sarah Johnson",
      role: "Leadership Mentor",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHNldCUyMGdvYWxzfGVufDB8fHx8MTY4OTc2NDc2Nw&ixlib=rb-1.2.1&q=80&w=400",
      rating: 4.8,
      reviews: 93,
      skills: ["Team Management", "Leadership Skills", "Conflict Resolution"],
    },
    {
      name: "Michael Brown",
      role: "Tech Industry Expert",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fG5hdmlnYXRlJTIweW91ciUyMHBhdGh8ZW58MHx8fHwxNjg5NzY0NzY3&ixlib=rb-1.2.1&q=80&w=400",
      rating: 4.9,
      reviews: 156,
      skills: ["Full Stack Development", "AI/ML", "Cloud Computing"],
    },
    {
      name: "Emily Davis",
      role: "Business Strategy",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHNlbGYlMjBkaXNjb3Zlcnl8ZW58MHx8fHwxNjg5NzY0NzY3&ixlib=rb-1.2.1&q=80&w=400",
      rating: 4.7,
      reviews: 84,
      skills: ["Market Analysis", "Strategic Planning", "Budgeting"],
    },
    // Add more specialists as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center py-16 mt-11 px-6">
      <div className="container text-center">
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold text-gray-800">
            Build your career <br /> with a plan that works
          </h2>
          <Slider {...settings}>
            {/* Feature 1 - Discover Yourself */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-2xl transition-transform transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHNlbGYlMjBkaXNjb3Zlcnl8ZW58MHx8fHwxNjg5NzY0NzY3&ixlib=rb-1.2.1&q=80&w=400"
                alt="Discover Yourself"
                className="w-56 h-56 mx-auto mb-6"
              />
              <h3 className="font-bold text-xl mb-3">Discover Yourself</h3>
              <p className="text-gray-600">
                Evaluate your level and master what will help you advance in your profession.
              </p>
            </div>

            {/* Feature 2 - Set Goals */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-2xl transition-transform transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHNldCUyMGdvYWxzfGVufDB8fHx8MTY4OTc2NDc2Nw&ixlib=rb-1.2.1&q=80&w=400"
                alt="Set Goals"
                className="w-56 h-56 mx-auto mb-6"
              />
              <h3 className="font-bold text-xl mb-3">Set Goals</h3>
              <p className="text-gray-600">
                Create a long-term development plan and follow it step by step, without abandoning it halfway.
              </p>
            </div>

            {/* Feature 3 - Navigate Your Path */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-2xl transition-transform transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fG5hdmlnYXRlJTIweW91ciUyMHBhdGh8ZW58MHx8fHwxNjg5NzY0NzY3&ixlib=rb-1.2.1&q=80&w=400"
                alt="Navigate Your Path"
                className="w-56 h-56 mx-auto mb-6"
              />
              <h3 className="font-bold text-xl mb-3">Navigate your path</h3>
              <p className="text-gray-600">
                Gain confidence and find your place in the IT community.
              </p>
            </div>
            {specialists.map((specialist, index) => (
              <div key={index} className="p-4">
                <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-2xl transition-transform transform hover:scale-105">
                  <img
                    src={specialist.image}
                    alt={specialist.name}
                    className="w-56 h-56 mx-auto mb-6 rounded-full"
                  />
                  <h3 className="font-bold text-xl mb-3">{specialist.name}</h3>
                  <p className="text-gray-600">{specialist.role}</p>
                  <div className="flex items-center justify-center mt-2">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1">{specialist.rating}</span>
                    <span className="text-gray-500 text-sm ml-2">
                      ({specialist.reviews} reviews)
                    </span>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Skills:</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
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
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
