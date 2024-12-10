import React from "react";

export function ProcessSection() {
  const steps = [
    {
      title: "Define Your Goals",
      description: "Complete a unique exploration process and identify areas where you can grow.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
    },
    {
      title: "Choose a Mentor",
      description: "Find a mentor who matches your aspirations and can guide you through your journey.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
      title: "Schedule a Meeting",
      description: "Book convenient time slots to connect with your mentor and start your growth journey.",
      image: "https://www.alamy.com/calendar-software-showing-busy-schedule-of-manager-with-many-meetings-tasks-and-appointments-during-the-week-time-management-organization-at-work-co-image332806981.html",
    },
    {
      title: "Grow",
      description: "Track your progress and achieve your goals with expert guidance.",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
    },
  ];

  return (
    <section className="py-12 bg-gray-50 flex justify-center items-center min-h-screen">
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-2">Engage with a Mentor</h2>
        <p className="text-gray-500 mb-12">According to a proven plan</p>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 w-full h-48 relative">
                <img
                  src={`${step.image}?auto=format&fit=crop&w=400&h=400&q=80`}
                  alt={step.title}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
              <p className="text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
