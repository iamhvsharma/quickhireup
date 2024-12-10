import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const KeySkillsForm = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold mb-4">Key Skills</h3>
      <div>
        <Label htmlFor="skills">Skills</Label>
        <Input id="skills" placeholder="Enter your skills" />
      </div>
    </div>
  );
};

export default KeySkillsForm;