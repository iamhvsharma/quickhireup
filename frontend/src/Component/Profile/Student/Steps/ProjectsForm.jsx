import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ProjectsForm = ({ onNext, onBack }) => {
  const [projects, setProjects] = useState([{ title: '', description: '', liveLink: '', githubLink: '' }]);

  const addProject = () => {
    setProjects([...projects, { title: '', description: '', liveLink: '', githubLink: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-6">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-2xl font-bold">Projects</h1>
        <p className="text-slate-600">
          Share your projects and contributions
        </p>
      </div>

      <div className="space-y-6 rounded-lg bg-white p-6 shadow-sm">
        {projects.map((project, index) => (
          <div key={index} className="space-y-4 p-4 border rounded-lg">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Project {index + 1}</h3>
              {index > 0 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setProjects(projects.filter((_, i) => i !== index))}
                >
                  Remove
                </Button>
              )}
            </div>

            <div>
              <Label>Project Title*</Label>
              <Input placeholder="e.g., Personal Portfolio" />
            </div>

            <div>
              <Label>Description*</Label>
              <Input placeholder="Brief description of the project" />
            </div>

            <div>
              <Label>Live Link</Label>
              <Input placeholder="e.g., https://project.com" />
            </div>

            <div>
              <Label>GitHub Link</Label>
              <Input placeholder="e.g., https://github.com/project" />
            </div>
          </div>
        ))}

        <Button
          type="button"
          variant="outline"
          className="w-full"
          onClick={addProject}
        >
          Add Project
        </Button>
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

export default ProjectsForm; 