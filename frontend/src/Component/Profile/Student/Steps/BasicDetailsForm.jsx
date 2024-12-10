import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const BasicDetailsForm = ({ onNext }) => {
  const [bio, setBio] = useState('');
  const charLimit = 300;

  const handleBioChange = (e) => {
    const input = e.target.value;
    if (input.length <= charLimit) {
      setBio(input);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-6">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-2xl font-bold">Basic Details</h1>
        <p className="text-slate-600">
          Tell us about yourself so we can personalize your experience.
        </p>
      </div>

      <div className="space-y-6 rounded-lg bg-white p-6 shadow-sm">
        <div>
          <Label htmlFor="name">Full Name*</Label>
          <Input id="name" placeholder="Your full name" />
        </div>

        <div>
          <Label htmlFor="email">Email Address*</Label>
          <Input id="email" type="email" placeholder="your@email.com" />
        </div>

        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" placeholder="Your phone number" />
        </div>

        <div>
          <Label htmlFor="location">Location*</Label>
          <Input id="location" placeholder="City, Country" />
        </div>

        <div>
          <Label htmlFor="education">Current Education Level*</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select your education level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="high-school">High School</SelectItem>
              <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
              <SelectItem value="masters">Master's Degree</SelectItem>
              <SelectItem value="phd">Ph.D.</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-base font-semibold">Bio</Label>
          <p className="text-sm text-gray-500">
            Write a brief introduction about yourself
          </p>
          <div className="relative">
            <textarea
              value={bio}
              onChange={handleBioChange}
              rows={4}
              className="w-full resize-none rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 p-3 text-sm"
              placeholder="Tell us about yourself, your interests, and what you're looking for..."
            />
            <div className="mt-1 text-sm text-gray-500 flex justify-end">
              <span className={bio.length >= charLimit ? 'text-red-500' : ''}>
                {bio.length}/{charLimit} characters
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end `">
      <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default BasicDetailsForm; 