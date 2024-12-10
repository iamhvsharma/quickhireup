import React from 'react';

export function StudentProgressSteps({ currentStep }) {
  const steps = [
    { id: "basic", label: "Basic Details" },
    { id: "career", label: "Career" },
    { id: "projects", label: "Projects" },
    { id: "internships", label: "Internships" },
    { id: "certifications", label: "Certifications" },
    { id: "preferences", label: "Preferences" }
  ];

  const currentIndex = steps.findIndex(step => step.id === currentStep);
  const progress = ((currentIndex + 1) / steps.length) * 100;
  const isLastStep = currentIndex === steps.length - 1;

  return (
    <div className="sticky top-0 z-50 backdrop-blur-sm w-full bg-black/10 rounded-t-lg">
      <div className="relative w-full px-8 py-4">
        <div className="absolute bottom-0 left-0 h-1 w-full bg-slate-100">
          <div
            className={`h-full transition-all rounded-b-lg duration-300 ${
              isLastStep ? 'bg-green-600' : 'bg-blue-600'
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between gap-2 text-sm">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <span
                className={
                  currentStep === step.id
                    ? `font-semibold ${isLastStep ? 'text-green-600' : 'text-blue-600'}`
                    : 'text-slate-600'
                }
              >
                {step.label}
              </span>
              {index < steps.length - 1 && (
                <span className="text-slate-300">—</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
