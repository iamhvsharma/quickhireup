"use client";

import { useResume } from "../context/resume-context";
import { STEPS } from "../constants/steps";
import { PersonalDetailsForm } from "./form/personal-details";
import { SummaryForm } from "./form/summary-form";
import { ExperienceForm } from "./form/experience-form";
import { EducationForm } from "./form/education-form";
import { SkillsForm } from "./form/skills-form";
import { FinishStep } from "./form/finish-form";
import { ResumePreview } from "./preview/resume-preview";
import { Button } from "./ui/button";
import { Card } from "@/components/ui/card";

export function ResumeBuilder() {
  const { currentStep, setCurrentStep } = useResume();

  const currentStepIndex = STEPS.findIndex((step) => step.key === currentStep);
  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === STEPS.length - 1;

  const goToNextStep = () => {
    if (!isLastStep) {
      setCurrentStep(STEPS[currentStepIndex + 1].key);
    }
  };

  const goToPrevStep = () => {
    if (!isFirstStep) {
      setCurrentStep(STEPS[currentStepIndex - 1].key);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case "personal":
        return <PersonalDetailsForm />;
      case "summary":
        return <SummaryForm />;
      case "experience":
        return <ExperienceForm />;
      case "education":
        return <EducationForm />;
      case "skills":
        return <SkillsForm />;
      case "finish":
        return <FinishStep />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto py-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <Card className="p-6">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="inline-block rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 px-3 py-1 text-sm text-white">
                  Theme
                </span>
              </div>
              <div className="flex space-x-2">
                {!isFirstStep && (
                  <Button variant="outline" onClick={goToPrevStep}>
                    Prev
                  </Button>
                )}
                {!isLastStep ? (
                  <Button onClick={goToNextStep}>Next</Button>
                ) : (
                  <Button onClick={goToNextStep}>Finish</Button>
                )}
              </div>
            </div>
            {renderStep()}
          </Card>
        </div>
        <div className="lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)]">
          <ResumePreview />
        </div>
      </div>
    </div>
  );
}
