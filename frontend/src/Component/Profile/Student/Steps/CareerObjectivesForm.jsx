import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CareerObjectivesForm = ({ onNext, onBack }) => {
  const [careerGoals, setCareerGoals] = useState('');
  const [internshipPreferences, setInternshipPreferences] = useState([{ field: '', location: '', type: '' }]);
  const [skills, setSkills] = useState(['']);

  const addInternshipPreference = () => {
    setInternshipPreferences([...internshipPreferences, { field: '', location: '', type: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-6">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-2xl font-bold">Career Objectives</h1>
        <p className="text-slate-600">Define your career goals and preferences</p>
      </div>

      <div className="space-y-6 rounded-lg bg-white p-6 shadow-sm">
        <div>
          <Label>Career Goals</Label>
          <textarea
            value={careerGoals}
            onChange={(e) => setCareerGoals(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Describe your career aspirations"
          />
        </div>

        <div>
          <Label>Internship Preferences</Label>
          {internshipPreferences.map((pref, index) => (
            <div key={index} className="space-y-3 p-4 bg-gray-50 rounded-lg">
              <div>
                <Label>Field</Label>
                <Input
                  value={pref.field}
                  onChange={(e) => {
                    const newPrefs = [...internshipPreferences];
                    newPrefs[index].field = e.target.value;
                    setInternshipPreferences(newPrefs);
                  }}
                  placeholder="e.g., Web Development"
                />
              </div>
              <div>
                <Label>Preferred Location</Label>
                <Input
                  value={pref.location}
                  onChange={(e) => {
                    const newPrefs = [...internshipPreferences];
                    newPrefs[index].location = e.target.value;
                    setInternshipPreferences(newPrefs);
                  }}
                  placeholder="e.g., Remote"
                />
              </div>
              <div>
                <Label>Type</Label>
                <select
                  value={pref.type}
                  onChange={(e) => {
                    const newPrefs = [...internshipPreferences];
                    newPrefs[index].type = e.target.value;
                    setInternshipPreferences(newPrefs);
                  }}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select type</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Full-Time">Full-Time</option>
                  <option value="Remote">Remote</option>
                </select>
              </div>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            className="w-full mt-4"
            onClick={addInternshipPreference}
          >
            Add Preference
          </Button>
        </div>

        <div>
          <Label>Skills</Label>
          <Input
            value={skills.join(', ')}
            onChange={(e) => setSkills(e.target.value.split(',').map(skill => skill.trim()))}
            placeholder="Enter skills separated by commas"
          />
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
        >
          Back
        </button>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </form>
  );
}

export default CareerObjectivesForm; 