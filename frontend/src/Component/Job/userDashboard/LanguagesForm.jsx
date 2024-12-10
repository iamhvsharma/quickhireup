import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const LanguagesForm = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold mb-4">Languages</h3>
      <div>
        <Label htmlFor="languages">Languages</Label>
        <Input id="languages" placeholder="Enter languages you know" />
      </div>
    </div>
  );
};

export default LanguagesForm;