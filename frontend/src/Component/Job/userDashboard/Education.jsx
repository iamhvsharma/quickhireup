import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const EducationForm = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold mb-4">Education</h3>
      <div>
        <Label htmlFor="school">School/University</Label>
        <Input id="school" placeholder="Enter school/university" />
      </div>
      <div>
        <Label htmlFor="degree">Degree</Label>
        <Input id="degree" placeholder="Enter degree" />
      </div>
      <div>
        <Label htmlFor="year">Year of Passing</Label>
        <Input id="year" placeholder="Enter year" />
      </div>
    </div>
  );
};

export default EducationForm;