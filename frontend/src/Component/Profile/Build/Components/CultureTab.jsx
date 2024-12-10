import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useScrollTop } from "../../../../hooks/useScrollTop";

export function CultureTab({ onNext, onBack }) {
  useScrollTop(); 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Your existing form validation logic here
    onNext();
  };

  return (
    <div className="max-w-2xl mx-auto mb-10 mt-6">
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-center">
              Describe what you are looking for in your next job
            </h2>
            <p className="text-sm text-gray-500 mb-4 text-center">
              Startups tell us this is one of the first things they look at in a
              profile.
            </p>
          </div>
          <div className="space-y-6 rounded-lg bg-white p-6 shadow-sm">
            <div>
              <Textarea
                placeholder="Describe what you are looking for in your next job"
                className="h-32"
              />
              <p className="text-sm text-gray-500 mt-1">
                300 characters remaining
              </p>
              <h2 className="text-lg font-semibold mb-2">
                What motivates you more?
              </h2>
              <RadioGroup defaultValue="technical">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="technical" id="technical" />
                  <Label htmlFor="technical">Solving technical problems</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="products" id="products" />
                  <Label htmlFor="products">Building products</Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">
                Over the next five years, what career track do you want to
                follow?
              </h2>
              <RadioGroup defaultValue="individual">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="individual" id="individual" />
                  <Label htmlFor="individual">Individual contributor</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="manager" id="manager" />
                  <Label htmlFor="manager">Manager</Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">
                What environment do you work better in?
              </h2>
              <RadioGroup defaultValue="clear">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="clear" id="clear" />
                  <Label htmlFor="clear">
                    Clear role and set of responsibilities. Consistent feedback
                    from management.
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="flexible" id="flexible" />
                  <Label htmlFor="flexible">
                    Employees wear a lot of hats. Assignments often require
                    employees to "figure it out" on their own.
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">
                What's most important to you in your next job? (Max 2)
              </h2>
              <div className="space-y-2">
                {[
                  "Having a say in what I work on and how I work",
                  "Opportunities to progress within the company",
                  "Team members I can learn from",
                  "A company with a good growth trajectory",
                  "Having a say in the company's and/or my team's direction",
                  "Mentorship opportunities",
                  "Learn new things and develop my skills",
                  "Challenging problems to work on",
                  "A diverse team",
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-2">
                    <Checkbox id={item} />
                    <Label htmlFor={item}>{item}</Label>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={onBack}
                className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white rounded-md bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CultureTab;
