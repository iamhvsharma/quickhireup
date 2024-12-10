export function ProgressSteps({ currentStep }) {
  const steps = [
    "base",
    "preferences",
    "culture",
    "resume",
    "email-verification",
    "done"
  ];
  const currentIndex = steps.indexOf(currentStep);
  const progress = currentStep === "done" 
    ? 100 
    : ((currentIndex + 1) / (steps.length - 1)) * 100;

  return (
    <div className="sticky top-0 z-50 backdrop-blur-sm w-full bg-black/10 rounded-t-lg">
      <div className="relative w-full px-8 py-4">
        <div className="absolute bottom-0 left-0 h-1 w-full bg-slate-100">
          <div
            className={`h-full transition-all rounded-b-lg duration-300 ${
              currentStep === "email-verification" ? "bg-green-600" : "bg-blue-600"
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-center gap-2 text-sm">
          <span
            className={
              currentStep === "base"
                ? "font-semibold text-blue-600"
                : "text-slate-600"
            }
          >
            Profile
          </span>
          <span className="text-slate-300">—</span>

          <span
            className={
              currentStep === "preferences"
                ? "font-semibold text-blue-600"
                : "text-slate-600"
            }
          >
            Preferences
          </span>
          <span className="text-slate-300">—</span>

          <span
            className={
              currentStep === "culture"
                ? "font-semibold text-blue-600"
                : "text-slate-600"
            }
          >
            Culture
          </span>
          <span className="text-slate-300">—</span>

          <span
            className={
              currentStep === "resume"
                ? "font-semibold text-blue-600"
                : "text-slate-600"
            }
          >
            Resume/CV
          </span>
          <span className="text-slate-300">—</span>

          <span
            className={
              currentStep === "email-verification"
                ? "font-semibold text-blue-600"
                : "text-slate-600"
            }
          >
            Email Verification
          </span>
          <span className="text-slate-300">—</span>
          <span
            className={
              currentStep === "done"
                ? "font-semibold text-green-600"
                : "text-green-600"
            }
          >
            Done 
          </span>
        </div>
      </div>
    </div>
  );
}
