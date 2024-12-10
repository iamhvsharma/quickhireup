export function NavigationButtons({ currentStep, onNext, onBack, isValid = true }) {
  return (
    <div className="flex justify-between mt-6">
      <button
        onClick={onBack}
        type="button"
        className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200"
      >
        Back
      </button>
      <button
        onClick={onNext}
        disabled={!isValid}
        className={`px-4 py-2 text-sm font-medium text-white rounded-md transition-colors
          ${currentStep === "email-verification"
            ? "bg-green-600 hover:bg-green-700 disabled:bg-green-300"
            : "bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300"
          }`}
      >
        {currentStep === "email-verification" ? "Complete Registration" : "Continue"}
      </button>
    </div>
  );
} 