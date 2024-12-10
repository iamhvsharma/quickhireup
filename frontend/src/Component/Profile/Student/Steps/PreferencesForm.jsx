import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { useStudentProfile } from '@/contexts/StudentProfileContext';

const PreferencesForm = ({ onNext, onBack }) => {
  const { studentData, updateStudentData } = useStudentProfile();
  const preferences = studentData.preferences;

  const [preferredTech, setPreferredTech] = useState(preferences.preferredTechnologies);
  const [techInput, setTechInput] = useState('');
  
  const [unwillingTech, setUnwillingTech] = useState(preferences.unwillingTechnologies);
  const [unwillingTechInput, setUnwillingTechInput] = useState('');
  
  const [motivators, setMotivators] = useState(preferences.motivators);
  const [motivatorInput, setMotivatorInput] = useState('');

  const [openToRemote, setOpenToRemote] = useState(preferences.openToRemote);
  const [workEnvironment, setWorkEnvironment] = useState(preferences.workEnvironmentPreferences);

  const availableTechnologies = ['React', 'Node.js', 'Python', 'Java', 'AWS', 'Docker', 'JavaScript', 'TypeScript', 'Angular', 'Vue.js'];
  const availableMotivators = ['Learning', 'Problem Solving', 'Building Products', 'Collaboration'];

  const handleAdd = (item, list, setList, setInput, maxItems = 5) => {
    if (!list.includes(item) && list.length < maxItems) {
      setList([...list, item]);
      setInput('');
    }
  };

  const handleRemove = (item, list, setList) => {
    setList(list.filter(i => i !== item));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateStudentData('preferences', {
      preferredTechnologies: preferredTech,
      unwillingTechnologies: unwillingTech,
      openToRemote: openToRemote,
      workEnvironmentPreferences: workEnvironment
    });
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-6">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-2xl font-bold">Preferences</h1>
        <p className="text-slate-600">Customize your job search preferences</p>
      </div>

      <div className="space-y-6 rounded-lg bg-white p-6 shadow-sm">
        {/* Preferred Technologies */}
        <div className="space-y-2">
          <Label>Preferred Technologies (Max 5)</Label>
          <div className="flex flex-wrap gap-2 mb-2 min-h-[32px]">
            {preferredTech.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="cursor-pointer bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-1"
              >
                {tech}
                <X
                  className="h-3 w-3 hover:text-red-200"
                  onClick={() => handleRemove(tech, preferredTech, setPreferredTech)}
                />
              </Badge>
            ))}
          </div>
          <div className="relative">
            <Input
              value={techInput}
              onChange={(e) => setTechInput(e.target.value)}
              placeholder="Type to search technologies..."
              className="w-full"
            />
            {techInput && (
              <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-48 overflow-auto">
                {availableTechnologies
                  .filter(tech => 
                    tech.toLowerCase().includes(techInput.toLowerCase()) && 
                    !preferredTech.includes(tech) &&
                    !unwillingTech.includes(tech)
                  )
                  .map((tech) => (
                    <button
                      key={tech}
                      type="button"
                      onClick={() => handleAdd(tech, preferredTech, setPreferredTech, setTechInput)}
                      className="block w-full text-left px-4 py-2 hover:bg-blue-50 text-sm"
                    >
                      {tech}
                    </button>
                  ))}
              </div>
            )}
          </div>
        </div>

        {/* Unwilling Technologies */}
        <div className="space-y-2">
          <Label>Technologies You'd Rather Not Work With (Max 5)</Label>
          <div className="flex flex-wrap gap-2 mb-2 min-h-[32px]">
            {unwillingTech.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="cursor-pointer bg-red-600 text-white hover:bg-red-700 flex items-center gap-1"
              >
                {tech}
                <X
                  className="h-3 w-3 hover:text-red-200"
                  onClick={() => handleRemove(tech, unwillingTech, setUnwillingTech)}
                />
              </Badge>
            ))}
          </div>
          <div className="relative">
            <Input
              value={unwillingTechInput}
              onChange={(e) => setUnwillingTechInput(e.target.value)}
              placeholder="Type to search technologies..."
              className="w-full"
            />
            {unwillingTechInput && (
              <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-48 overflow-auto">
                {availableTechnologies
                  .filter(tech => 
                    tech.toLowerCase().includes(unwillingTechInput.toLowerCase()) && 
                    !unwillingTech.includes(tech) &&
                    !preferredTech.includes(tech)
                  )
                  .map((tech) => (
                    <button
                      key={tech}
                      type="button"
                      onClick={() => handleAdd(tech, unwillingTech, setUnwillingTech, setUnwillingTechInput)}
                      className="block w-full text-left px-4 py-2 hover:bg-blue-50 text-sm"
                    >
                      {tech}
                    </button>
                  ))}
              </div>
            )}
          </div>
        </div>

        {/* Open to Remote Work */}
        <div className="space-y-2">
          <Label>Open to Remote Work</Label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={openToRemote}
              onChange={() => setOpenToRemote(!openToRemote)}
              className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
            <span>I’m open to work remotely</span>
          </label>
        </div>

        {/* Motivators */}
        <div className="space-y-2">
          <Label>What Motivates You? (Max 3)</Label>
          <div className="flex flex-wrap gap-2 mb-2">
            {motivators.map((motivator) => (
              <span 
                key={motivator} 
                className="flex items-center gap-1 bg-blue-100 text-blue-800 px-2 py-1 rounded-md"
              >
                {motivator}
                <button
                  type="button"
                  onClick={() => handleRemove(motivator, motivators, setMotivators)}
                  className="text-blue-600 hover:text-blue-800 font-bold"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          <div className="relative">
            <Input
              value={motivatorInput}
              onChange={(e) => setMotivatorInput(e.target.value)}
              placeholder="Search motivators..."
              className="w-full"
            />
            {motivatorInput && (
              <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-48 overflow-auto">
                {availableMotivators
                  .filter(motivator => 
                    motivator.toLowerCase().includes(motivatorInput.toLowerCase()) && 
                    !motivators.includes(motivator)
                  )
                  .map((motivator) => (
                    <button
                      key={motivator}
                      type="button"
                      onClick={() => handleAdd(motivator, motivators, setMotivators, setMotivatorInput, 3)}
                      className="block w-full text-left px-4 py-2 hover:bg-blue-50 text-sm"
                    >
                      {motivator}
                    </button>
                  ))}
              </div>
            )}
          </div>
        </div>

        {/* Work Environment Preferences */}
        <div className="space-y-2">
          <Label>Work Environment Preferences</Label>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={workEnvironment.clearResponsibilities}
                onChange={() => setWorkEnvironment({ ...workEnvironment, clearResponsibilities: !workEnvironment.clearResponsibilities })}
                className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
              <span>Clear, well-defined responsibilities</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={workEnvironment.versatileAssignments}
                onChange={() => setWorkEnvironment({ ...workEnvironment, versatileAssignments: !workEnvironment.versatileAssignments })}
                className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
              <span>Versatile assignments and learning opportunities</span>
            </label>
          </div>
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

export default PreferencesForm; 