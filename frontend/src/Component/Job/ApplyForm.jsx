import React, { useState } from 'react';
import { X, Upload, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";

export default function JobApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    location: '',
    remoteWork: false,
    experience: '',
    salary: '',
    workAuthorization: '',
    sponsorship: '',
    coverLetter: '',
    resume: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-3xl bg-white rounded-lg shadow-xl">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold">T</span>
              </div>
              <div>
                <h2 className="font-bold text-lg">TerraFirma Robotics</h2>
                <p className="text-gray-600">Robotics Software Engineer</p>
                <div className="mt-2 space-y-1 text-sm text-gray-500">
                  <p>Location: Austin</p>
                  <p>Job Type: Full Time</p>
                  <p>Visa Sponsorship: Not available</p>
                </div>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Your Application</h3>
              <p className="text-gray-600 mb-4">
                Complete the fields below or <a href="#" className="text-blue-600 hover:underline">Log in</a> with your account to apply.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="fullName">Full Name*</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  placeholder="Jane Doe"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email*</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="mail@website.com"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password">Set a Password*</Label>
                <p className="text-sm text-gray-500 mb-2">Create a password to protect and access your account</p>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  placeholder="min 8 characters"
                  required
                />
              </div>

              <div>
                <Label htmlFor="confirmPassword">Confirm Password*</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  placeholder="repeat password"
                  required
                />
              </div>

              <div>
                <Label htmlFor="location">Set Your Location*</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    placeholder="e.g. San Francisco"
                    className="pl-10"
                    required
                  />
                </div>
                <div className="mt-2">
                  <Checkbox
                    id="remoteWork"
                    checked={formData.remoteWork}
                    onCheckedChange={(checked) => setFormData({...formData, remoteWork: checked})}
                  />
                  <label htmlFor="remoteWork" className="ml-2 text-sm">
                    I'm open to work remotely
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="experience">Years of experience*</Label>
                  <Select
                    value={formData.experience}
                    onValueChange={(value) => setFormData({...formData, experience: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
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

                <div>
                  <Label htmlFor="salary">Desired Salary*</Label>
                  <Input
                    id="salary"
                    value={formData.salary}
                    onChange={(e) => setFormData({...formData, salary: e.target.value})}
                    placeholder="enter amount in USD"
                    required
                  />
                </div>
              </div>

              <div className="space-y-4">
                <Label>US work authorization*</Label>
                <p className="text-sm text-gray-600">Are you legally authorized to work in the United States?</p>
                <RadioGroup
                  value={formData.workAuthorization}
                  onValueChange={(value) => setFormData({...formData, workAuthorization: value})}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="auth-yes" />
                    <Label htmlFor="auth-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="auth-no" />
                    <Label htmlFor="auth-no">No</Label>
                  </div>
                </RadioGroup>

                <p className="text-sm text-gray-600">Do you or will you require sponsorship for a US employment visa (e.g. H-1B)?</p>
                <RadioGroup
                  value={formData.sponsorship}
                  onValueChange={(value) => setFormData({...formData, sponsorship: value})}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="sponsor-yes" />
                    <Label htmlFor="sponsor-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="sponsor-no" />
                    <Label htmlFor="sponsor-no">No</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="coverLetter">Cover letter</Label>
                <Textarea
                  id="coverLetter"
                  value={formData.coverLetter}
                  onChange={(e) => setFormData({...formData, coverLetter: e.target.value})}
                  placeholder="Write a note to TerraFirma Robotics."
                  className="min-h-[100px]"
                />
              </div>

              <div>
                <Label>Upload a recent resume or CV</Label>
                <div className="mt-2 border-2 border-dashed rounded-lg p-6 text-center">
                  <Button variant="outline" className="mx-auto">
                    <Upload className="mr-2 h-4 w-4" />
                    Drag to upload your resume, or browse
                  </Button>
                  <p className="text-sm text-gray-500 mt-2">supports .pdf, .doc, .docx, or .txt file</p>
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full bg-black text-white">
              Submit application
            </Button>

            <p className="text-sm text-gray-500 text-center">
              By continuing you accept our{" "}
              <a href="#" className="text-blue-600 hover:underline">standard terms and conditions</a>
              {" "}and{" "}
              <a href="#" className="text-blue-600 hover:underline">privacy policy</a>
            </p>
          </form>
        </div>
      </Card>
    </div>
  );
}

