import { useJobPreferences } from "@/contexts/JobPreferencesContext";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProfileCreation from "./Components/ProfileCreation";
import PreferencesForm from "./Components/PreferencesForm";
import Resume from "./Components/Resume";
import CultureTab from "./Components/CultureTab";
import EmailVerification from "./Components/EmailVerification";
import { ProgressSteps } from "./Components/ProgressSteps";

export default function BuildProfile() {
  const [currentStep, setCurrentStep] = useState("base");
  const { jobPreferences } = useJobPreferences();

  const steps = ["base", "preferences", "culture", "resume", "email-verification", "done"];

  const handleNext = () => {
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4">
      <div className="max-w-2xl mx-auto">
        <ProgressSteps currentStep={currentStep} />

        <div className="relative overflow-hidden">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              {currentStep === "base" && (
                <ProfileCreation onNext={handleNext} onBack={handleBack} />
              )}
              {currentStep === "preferences" && (
                <PreferencesForm onNext={handleNext} onBack={handleBack} />
              )}
              {currentStep === "culture" && (
                <CultureTab onNext={handleNext} onBack={handleBack} />
              )}
              {currentStep === "resume" && (
                <Resume onNext={handleNext} onBack={handleBack} />
              )}
              {currentStep === "email-verification" && (
                <EmailVerification onNext={handleNext} onBack={handleBack} />
              )}
              {currentStep === "done" && (
                <div>
                  {/* Add your completion component here */}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
