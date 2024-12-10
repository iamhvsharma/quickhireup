import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const CareerPref = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold mb-4">Career Preferences</h3>
      <div>
        <Label htmlFor="jobType">Preferred Job Type</Label>
        <Input id="jobType" placeholder="Enter job type" />
      </div>
      <div>
        <Label htmlFor="location">Preferred Location</Label>
        <Input id="location" placeholder="Enter location" />
      </div>
      <div>
        <Label htmlFor="availability">Availability</Label>
        <Input id="availability" placeholder="Enter availability" />
      </div>
    </div>
  );
};

export default CareerPref;