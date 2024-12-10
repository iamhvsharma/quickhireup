import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useScrollTop } from "../../../../hooks/useScrollTop";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function ProfileCreation({ onNext }) {
  useScrollTop();
  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [locationSearch, setLocationSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchLocations = async () => {
      if (locationSearch.length < 2) {
        setSuggestions([]);
        return;
      }

      try {
        // Replace this with your actual API call
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/location?query=${locationSearch}`
        );
        const data = await response.json();
        setSuggestions(data); // Adjust based on your API response structure
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    const debounce = setTimeout(() => {
      fetchLocations();
    }, 300);

    return () => clearTimeout(debounce);
  }, [locationSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-6">
      {/* Form Header */}
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-2xl font-bold">Create your profile</h1>
        <p className="text-slate-600">
          Apply privately to thousands of tech companies & startups with one
          profile.
        </p>
      </div>

      <div className="space-y-6 rounded-lg bg-white p-6 shadow-sm">
        {/* Location */}
        <div className="space-y-2">
          
          <Label htmlFor="location" className="flex gap-1">
            Where are you based?
            <span className="text-red-500">*</span>
          </Label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-full justify-between"
              >
                {location || "Search for a location..."}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Command>
                <CommandInput
                  placeholder="Search location..."
                  value={locationSearch}
                  onValueChange={setLocationSearch}
                />
                <CommandEmpty>No location found.</CommandEmpty>
                <CommandGroup>
                  {suggestions.map((suggestion) => (
                    <CommandItem
                      key={suggestion.id}
                      onSelect={() => {
                        setLocation(suggestion.name);
                        setOpen(false);
                      }}
                    >
                      {suggestion.name}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
          <p className="text-xs text-slate-500">
            Tip: You can choose a city, state, or country
          </p>
         
        </div>

        {/* Role */}
        <div className="space-y-2">
          <Label htmlFor="role" className="flex gap-1">
            What best describes your current role?
            <span className="text-red-500">*</span>
          </Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="engineer">Software Engineer</SelectItem>
              <SelectItem value="designer">Product Designer</SelectItem>
              <SelectItem value="manager">Product Manager</SelectItem>
              <SelectItem value="data">Data Scientist</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Experience */}
        <div className="space-y-2">
          <Label htmlFor="experience" className="flex gap-1">
            How many years of experience do you have in your current role?
            <span className="text-red-500">*</span>
          </Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select years of experience" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-1">0-1 years</SelectItem>
              <SelectItem value="1-3">1-3 years</SelectItem>
              <SelectItem value="3-5">3-5 years</SelectItem>
              <SelectItem value="5-10">5-10 years</SelectItem>
              <SelectItem value="10+">10+ years</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Student Status */}
        <div className="space-y-2">
          <Label className="flex gap-1">
            Are you a student or new grad?
            <span className="text-red-500">*</span>
          </Label>
          <RadioGroup defaultValue="no" className="flex gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" />
              <Label htmlFor="yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no" />
              <Label htmlFor="no">No</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Current Work */}
        <div className="space-y-2">
          <Label className="flex gap-1">
            Where do you currently work?
            <span className="text-red-500">*</span>
          </Label>
          <p className="text-xs text-slate-500">
            Your company will never see that you're looking for a job
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="job-title" className="sr-only">
                Job title
              </Label>
              <Input id="job-title" placeholder="e.g., Design Director" />
            </div>
            <div>
              <Label htmlFor="company" className="sr-only">
                Company
              </Label>
              <Input id="company" placeholder="e.g., Omnicorp" />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="unemployed" />
            <Label htmlFor="unemployed" className="text-sm">
              I'm not currently employed
            </Label>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="space-y-2">
          <Label htmlFor="linkedin">LinkedIn Profile</Label>
          <Input id="linkedin" placeholder="https://linkedin.com/in/" />
        </div>

        {/* Website */}
        <div className="space-y-2">
          <Label htmlFor="website">Your Website</Label>
          <Input id="website" placeholder="https://mypersonalwebsite.com" />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end mt-6">
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
