"use client";

import { createContext, useContext, useState } from "react";

const ResumeContext = createContext(undefined);

const initialData = {
  personalDetails: {
    firstName: "",
    lastName: "",
    jobTitle: "",
    address: "",
    phone: "",
    email: "",
  },
  summary: "",
  experience: [],
  education: [],
  skills: [],
};

export function ResumeProvider({ children }) {
  const [data, setData] = useState(initialData);
  const [currentStep, setCurrentStep] = useState("personal");

  const updateData = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
  };

  return (
    <ResumeContext.Provider
      value={{ data, currentStep, updateData, setCurrentStep }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error("useResume must be used within a ResumeProvider");
  }
  return context;
}
