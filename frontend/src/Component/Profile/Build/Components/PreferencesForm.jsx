import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Check, Search, X, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollTop } from '../../../../hooks/useScrollTop';


export default function PreferencesForm({ onNext, onBack }) {
  useScrollTop();
  const navigate = useNavigate();
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);


  const availableRoles = [
    "Frontend Engineer",
    "Backend Engineer",
    "Fullstack Engineer",
    "Mobile Developer",
    "DevOps Engineer",
    "Data Engineer",
    "UI/UX Designer",
    "Product Manager",
    "QA Engineer",
    "Technical Writer"
  ];

  const availableJobTypes = [
    "Full-time Employee",
    "Contractor",
    "Intern",
    "Co-founder"
  ];

  const locations = [
    "Remote",
    "San Francisco Bay Area",
    "New York City",
    "London",
    "Berlin",
    "Singapore",
    "Toronto",
    // Add more locations as needed
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your existing form validation logic here
    onNext();
  };

  const handleRoleSelection = (role) => {
    if (!selectedRoles.includes(role)) {
      setSelectedRoles(prev => [...prev, role]);
    }
  };

  const handleRemoveRole = (roleToRemove) => {
    setSelectedRoles(prev => prev.filter(role => role !== roleToRemove));
  };

  const handleJobTypeSelection = (jobType) => {
    if (!selectedJobTypes.includes(jobType)) {
      setSelectedJobTypes(prev => [...prev, jobType]);
    }
  };

  const handleRemoveJobType = (jobTypeToRemove) => {
    setSelectedJobTypes(prev => prev.filter(type => type !== jobTypeToRemove));
  };

  const handleLocationSelect = (location) => {
    if (!selectedLocations.includes(location)) {
      setSelectedLocations(prev => [...prev, location]);
    }
    setOpen(false);
  };

  const handleRemoveLocation = (locationToRemove) => {
    setSelectedLocations(prev => 
      prev.filter(location => location !== locationToRemove)
    );
  };




  useScrollTop();
  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-10 mt-6">
      {/* Progress Steps */}

      {/* Form Header */}
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-2xl font-bold">
          Set your job search preferences
        </h1>
        <p className="text-slate-600">
          Your answers determine which jobs we recommend for you and which
          startups see your profile.
        </p>
      </div>

      <div className="space-y-6 rounded-lg bg-white p-6 shadow-sm">
        {/* Job Search Status */}
        <div className="space-y-2">
          <Label className="flex gap-1">
            Where are you in your job search?
            <span className="text-red-500">*</span>
          </Label>
          <RadioGroup defaultValue="ready" className="flex gap-4">
            <Card className="flex-1">
              <CardContent className="p-4">
                <div className="grid gap-2">
                  <div className="flex items-center justify-start gap-2">
                    <RadioGroupItem value="ready" id="ready" />
                    <Label htmlFor="ready" className="font-medium">
                      Ready to interview
                    </Label>
                  </div>
                  <p className="text-sm text-slate-500">
                    You're actively looking for new work and ready to
                    interview. Your job profile will be visible by startups.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="flex-1">
              <CardContent className="p-4">
                <div className="grid gap-2">
                  <div className="flex items-center justify-start gap-2">
                    <RadioGroupItem value="open" id="open" />
                    <Label htmlFor="open" className="font-medium">
                      Open to offers
                    </Label>
                  </div>
                  <p className="text-sm text-slate-500">
                    You're not looking but open to hear about new
                    opportunities. Your job profile will be visible to
                    startups.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="flex-1">
              <CardContent className="p-4">
                <div className="grid gap-2">
                  <div className="flex items-center justify-start gap-2">
                    <RadioGroupItem value="closed" id="closed" />
                    <Label htmlFor="closed" className="font-medium">
                      Closed to offers
                    </Label>
                  </div>
                  <p className="text-sm text-slate-500">
                    You're not looking and don't want to hear about new
                    opportunities. Your job profile will be hidden to
                    startups.
                  </p>
                </div>
              </CardContent>
            </Card>
          </RadioGroup>
        </div>

        {/* Job Type */}
        <div className="space-y-2">
          <Label className="flex gap-1">
            What type of job are you interested in?
            <span className="text-red-500">*</span>
          </Label>
          <p className="text-xs text-slate-500">
            Choose the types of positions you're interested in
          </p>
          
          {/* Display Selected Job Types */}
          <div className="flex flex-wrap gap-2 mb-2 min-h-[32px]">
            {selectedJobTypes.map((jobType) => (
              <Badge
                key={jobType}
                variant="secondary"
                className="cursor-pointer bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-1"
              >
                {jobType}
                <X
                  className="h-3 w-3 hover:text-red-200"
                  onClick={() => handleRemoveJobType(jobType)}
                />
              </Badge>
            ))}
          </div>

          {/* Always visible placeholder */}
          {/* <span className="text-sm text-slate-500 italic block mb-2">
            Add job interests to get started...
          </span> */}

          {/* Job Type Selection Dropdown */}
          <Select onValueChange={handleJobTypeSelection}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Add a job type..." />
            </SelectTrigger>
            <SelectContent>
              {availableJobTypes
                .filter(type => !selectedJobTypes.includes(type))
                .map((jobType) => (
                  <SelectItem key={jobType} value={jobType}>
                    {jobType}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>

        {/* Salary */}
        <div className="space-y-2">
          <Label htmlFor="salary">What is your desired salary?</Label>
          <p className="text-xs text-slate-500">
            This information will never be shown on your public profile
          </p>
          <div className="flex gap-2">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2">
                $
              </span>
              <Input id="salary" className="pl-7" placeholder="0" />
            </div>
            <Select defaultValue="usd">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usd">United States Dollars ($)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Role */}
        <div className="space-y-2">
          <Label className="flex gap-1">
            What kind of role are you looking for?
            <span className="text-red-500">*</span>
          </Label>
          <p className="text-xs text-slate-500">
            Tip: You can select more than one
          </p>
          
          {/* Display Selected Roles */}
          <div className="flex flex-wrap gap-2 mb-2">
            {selectedRoles.map((role) => (
              <Badge
                key={role}
                variant="secondary"
                className="cursor-pointer bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-1"
              >
                {role}
                <X
                  className="h-3 w-3 hover:text-red-200"
                  onClick={() => handleRemoveRole(role)}
                />
              </Badge>
            ))}
          </div>

          {/* Role Selection Dropdown */}
          <Select onValueChange={handleRoleSelection}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Add a role..." />
            </SelectTrigger>
            <SelectContent>
              {availableRoles
                .filter(role => !selectedRoles.includes(role))
                .map((role) => (
                  <SelectItem key={role} value={role}>
                    {role}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>

        {/* Location */}
        <div className="space-y-2">
          <Label className="flex gap-1">
            Preferred locations
            <span className="text-red-500">*</span>
          </Label>
          <p className="text-xs text-slate-500">
            Where would you like to work? Select multiple locations if applicable
          </p>

          {/* Display Selected Locations */}
          <div className="flex flex-wrap gap-2 mb-2 min-h-[32px]">
            {selectedLocations.map((location) => (
              <Badge
                key={location}
                variant="secondary"
                className="cursor-pointer bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-1"
              >
                {location}
                <X
                  className="h-3 w-3 hover:text-red-200"
                  onClick={() => handleRemoveLocation(location)}
                />
              </Badge>
            ))}
          </div>

          {/* Always visible placeholder */}
          <span className="text-sm text-slate-500 italic block mb-2">
            Add preferred locations to get started...
          </span>

          {/* Location Selection Dropdown */}
          <Select onValueChange={handleLocationSelect}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select locations..." />
            </SelectTrigger>
            <SelectContent>
              {locations
                .filter(location => !selectedLocations.includes(location))
                .map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>

        {/* US Work Authorization */}
        <div className="space-y-4 rounded-lg border p-4">
          <div className="flex items-center gap-2">
            <h3 className="font-medium">US work authorization</h3>
            <Badge variant="secondary" className="uppercase">
              US
            </Badge>
          </div>
          <div className="grid gap-4">
            <div className="grid grid-cols-[1fr,auto,auto] items-center gap-4">
              <span className="text-sm">
                Are you legally authorized to work in the United States?
              </span>
              <RadioGroup className="flex gap-4" defaultValue="no">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="auth-yes" />
                  <Label htmlFor="auth-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="auth-no" />
                  <Label htmlFor="auth-no">No</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="grid grid-cols-[1fr,auto,auto] items-center gap-4">
              <span className="text-sm">
                Do you or will you require sponsorship for a US employment visa
                (e.g. H-1B)?
              </span>
              <RadioGroup className="flex gap-4" defaultValue="no">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="visa-yes" />
                  <Label htmlFor="visa-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="visa-no" />
                  <Label htmlFor="visa-no">No</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        {/* Company Size */}
        <div className="space-y-4">
          <h3 className="font-medium">
            Would you like to work at companies of these sizes?
          </h3>
          <div className="grid gap-4">
            {[
              { label: "Seed (1 - 10 employees)" },
              { label: "Early (11 - 50 employees)" },
              { label: "Mid-size (51 - 200 employees)" },
              { label: "Large (201 - 500 employees)" },
              { label: "Very Large (501 - 1000 employees)" },
              { label: "Massive (1001+ employees)" },
            ].map((size) => (
              <div
                key={size.label}
                className="grid grid-cols-[1fr,auto,auto,auto] items-center gap-4"
              >
                <span className="text-sm">{size.label}</span>
                <RadioGroup className="flex gap-4" defaultValue="no">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      name={`size-${size.label}`}
                      value="ideal"
                      id={`ideal-${size.label}`}
                    />
                    <Label htmlFor={`ideal-${size.label}`}>Ideal</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      name={`size-${size.label}`}
                      value="yes"
                      id={`yes-${size.label}`}
                    />
                    <Label htmlFor={`yes-${size.label}`}>Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      name={`size-${size.label}`}
                      value="no"
                      id={`no-${size.label}`}
                    />
                    <Label htmlFor={`no-${size.label}`}>No</Label>
                  </div>
                </RadioGroup>
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
    </form>
  );
}
