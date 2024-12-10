import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BasicDetailsForm from "./Steps/BasicDetailsForm";
import CareerObjectivesForm from "./Steps/CareerObjectivesForm";
import ProjectsForm from "./Steps/ProjectsForm";
import InternshipsForm from "./Steps/InternshipsForm";
import CertificationsForm from "./Steps/CertificationsForm";
import PreferencesForm from "./Steps/PreferencesForm";
import { StudentProgressSteps } from "./Steps/StudentProgressSteps";
import { useStudentProfile } from '@/contexts/StudentProfileContext';

export default function StudentProfileWizard() {
  const [section, setSection] = useState("basic");
  const [direction, setDirection] = useState(0);
  const sections = ["basic", "career", "projects", "internships", "certifications", "preferences"];
  const { studentData } = useStudentProfile();

  const handleNext = () => {
    const currentIndex = sections.indexOf(section);
    if (currentIndex < sections.length - 1) {
      setDirection(1);
      setSection(sections[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const currentIndex = sections.indexOf(section);
    if (currentIndex > 0) {
      setDirection(-1);
      setSection(sections[currentIndex - 1]);
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    })
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4">
      <div className="max-w-2xl mx-auto">
        <StudentProgressSteps currentStep={section} />
        
        <div className="relative overflow-hidden">
          <AnimatePresence initial={false} mode="wait" custom={direction}>
            <motion.div
              key={section}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="form-container"
            >
              {section === "basic" && <BasicDetailsForm onNext={handleNext} />}
              {section === "career" && <CareerObjectivesForm onNext={handleNext} onBack={handleBack} />}
              {section === "projects" && <ProjectsForm onNext={handleNext} onBack={handleBack} />}
              {section === "internships" && <InternshipsForm onNext={handleNext} onBack={handleBack} />}
              {section === "certifications" && <CertificationsForm onNext={handleNext} onBack={handleBack} />}
              {section === "preferences" && <PreferencesForm onNext={handleNext} onBack={handleBack} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
} 