import React, { useState } from "react";

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      question: "What is QuickHireUp?",
      answer: "QuickHireUp connects job seekers with employers through a user-friendly online platform.",
    },
    {
      question: "How do I create a profile?",
      answer: "Sign up, fill in your details, and upload your resume to complete your profile.",
    },
    {
      question: "Can I apply to jobs directly on the platform?",
      answer: "Yes, you can apply directly through job listings with a single click.",
    },
    {
      question: "How can I make my profile stand out?",
      answer: "Keep it updated, highlight key skills, and complete skill assessments.",
    },
    {
      question: "How do I post a job?",
      answer: "Log in, click 'Post a Job,' fill in the details, and publish.",
    },
    {
      question: "What is the Skill Assessment feature?",
      answer: "Candidates take tests to showcase expertise and employers view scores to evaluate.",
    },
  ];
  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className=" bg-blue-50 max-w-2xl mx-auto flex items-center justify-center py-6 mt-9 px-4 rounded-md">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-xl w-full">
        {/* Header Section */}
        <div className="flex justify-between">
          <div>
            <p className="text-sm font-bold text-yellow-500 uppercase mb-2">
              Relevant Stuff Bla Bla
            </p>
            <h1 className="text-4xl font-bold leading-tight text-gray-900">
              Things, you<br></br>
              <span className="flex flex-row items-center gap-x-4 text-blue-600">
                probably wonder.
                <div className="w-12 h-12 mb-3 bg-blue-600 rounded-full">
                  <div className="text-white text-center animate-bounce">?</div>
                </div>
              </span>
            </h1>
          </div>
          <div className="w-32 h-32">
            <img
              src="https://formcarry.com/_next/image?url=https%3A%2F%2Fcarrier.formcarry.com%2Fwebsite-assets%2Fsumbul_faq%402x.png&w=1920&q=75"
              alt="avatar"
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              {/* Question */}
              <button
                className="w-full text-left flex justify-between items-center px-4 py-3 text-gray-600 font-medium"
                onClick={() => toggleQuestion(index)}
              >
                {faq.question}
                <span
                  className={`transform transition-transform duration-300 ${
                    openQuestion === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </button>

              {/* Answer */}
              {openQuestion === index && (
                <div className="bg-gray-50 px-4 py-3 text-sm text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* See All Button */}
        <div className="mt-6 flex justify-center">
          <button className="px-6 py-2 bg-gray-100 text-gray-900 font-medium rounded-lg hover:bg-gray-200">
            See All →
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
