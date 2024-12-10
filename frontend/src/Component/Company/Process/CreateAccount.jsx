"use client";

import React from "react";
import { Upload, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function AccountSetupForm() {
  const navigate = useNavigate(); // Initialize navigate function

  const handleNext = () => {
    navigate("/WelcomePage"); // Navigate to the WelcomePage
  };

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      {/* Sidebar */}
      <div className="w-full lg:w-64 bg-black p-6">
        <div className="text-white text-2xl font-bold mb-8">QuickHireUp</div>
        <nav className="space-y-4">
          <div className="flex items-center space-x-3 text-white opacity-100">
            <div className="w-4 h-4 rounded-full border-2 border-white" />
            <span>Set up your account</span>
          </div>
          <div className="flex items-center space-x-3 text-white opacity-50">
            <div className="w-4 h-4 rounded-full border-2 border-white" />
            <span>Invite your team</span>
          </div>
          <div className="flex items-center space-x-3 text-white opacity-50">
            <div className="w-4 h-4 rounded-full border-2 border-white" />
            <span>Start recruiting</span>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 lg:p-8 space-y-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Let's create your Account</h1>

          {/* Company Information */}
          <Card className="mb-8">
            <CardContent className="p-6 space-y-6">
              <h2 className="text-xl font-semibold">About your Company</h2>
              <p className="text-sm text-muted-foreground">
                Keep in mind you can always update this later
              </p>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="company-name">Company Name*</Label>
                  <Input id="company-name" placeholder="Super-web" />
                </div>

                <div>
                  <Label>Logo*</Label>
                  <div className="border-2 border-dashed rounded-lg p-8 text-center">
                    <Button variant="outline" className="mx-auto hover:bg-blue-500 hover:text-white">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Logo
                    </Button>
                    <p className="text-sm text-muted-foreground mt-2">
                      or drag it in
                    </p>
                  </div>
                </div>

                <div>
                  <Label htmlFor="work-email">Work Email*</Label>
                  <Input
                    id="work-email"
                    type="email"
                    placeholder="work@company.com"
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Work email should match company domain
                  </p>
                </div>

                <div>
                  <Label htmlFor="website">Website*</Label>
                  <Input id="website" type="url" placeholder="https://" />
                </div>

                <div>
                  <Label htmlFor="location">Location*</Label>
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="location"
                      className="pl-8"
                      placeholder="e.g. San Francisco"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="markets">Markets*</Label>
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="markets"
                      className="pl-8"
                      placeholder="e.g. Mobile, Blockchain"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="employees">Number of employees*</Label>
                  <Select>
                    <SelectTrigger id="employees">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10</SelectItem>
                      <SelectItem value="11-50">11-50</SelectItem>
                      <SelectItem value="51-200">51-200</SelectItem>
                      <SelectItem value="201-500">201-500</SelectItem>
                      <SelectItem value="500+">500+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="pitch">One-line pitch</Label>
                  <Input
                    id="pitch"
                    placeholder="e.g. A platform for startups"
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Describe what your company does in just a few words
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personal Information */}
          <Card>
            <CardContent className="p-6 space-y-6">
              <h2 className="text-xl font-semibold">About you</h2>
              <p className="text-sm text-muted-foreground">
                Keep in mind you can always update this later
              </p>

              <div className="space-y-4">
                <div>
                  <Label>Profile Photo</Label>
                  <Button variant="outline" className="w-full mt-2 hover:bg-blue-500 hover:text-white">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload a new photo
                  </Button>
                </div>

                <div>
                  <Label htmlFor="name">Name*</Label>
                  <Input id="name" />
                </div>

                <div>
                  <Label htmlFor="phone">Phone (US only)</Label>
                  <Input id="phone" placeholder="(000)-000-0000" />
                </div>

                <div>
                  <Label htmlFor="role">Your role*</Label>
                  <Select>
                    <SelectTrigger id="role">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ceo">CEO</SelectItem>
                      <SelectItem value="cto">CTO</SelectItem>
                      <SelectItem value="hr">HR Manager</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I have read and accepted the{" "}
                    <a href="#" className="text-blue-500 hover:underline">
                      Guidelines
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-500 hover:underline">
                      Terms of Service
                    </a>
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <Button variant="outline" className="hover:bg-blue-500 hover:text-white">Back</Button>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white" onClick={handleNext}>Next up: Invite your team</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
