import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bold, Italic, List, Link2, HelpCircle } from 'lucide-react';

export default function JobPostingForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    positionType: "full-time",
    primaryRole: "",
    workExperience: "",
    skills: [],
    location: "",
    relocation: false,
    relocationAssistance: false,
    visaSponsorship: false,
    remotePolicy: "in-office",
    wfhFlexibility: false,
    autoSkipNonRelocate: false,
    currency: "USD",
    salaryMin: "",
    salaryMax: "",
    equityMin: "0.0",
    equityMax: "1.0",
    noEquity: false,
    recruitingContact: "",
    subscribers: [],
    coworkers: [],
    companySize: ""
  });

  const handlePublish = () => {
    navigate('/CompanyDashboard');
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <div className="w-64 border-r p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Jobs</h2>
          <Button variant="link" className="text-blue-600">+ Post Job</Button>
        </div>

        <Input 
          type="search" 
          placeholder="Search by job" 
          className="mb-4"
        />

        <div className="flex mb-4">
          <Button variant="ghost" className="flex-1">Active (0)</Button>
          <Button variant="ghost" className="flex-1">Drafts (0)</Button>
        </div>

        <Card className="bg-gray-50 mb-4">
          <CardContent className="p-4">
            <h3 className="font-medium mb-2">New Job Posting</h3>
          </CardContent>
        </Card>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Post a job for free</h3>
          <p className="text-sm text-gray-600 mb-4">
            We have a global network of over 3.5M active job seekers. Let them know you're hiring.
          </p>
          <Button className="w-full bg-black text-white mb-2">Post a job</Button>
          <Button variant="outline" className="w-full">Connect ATS</Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">New Job Posting</h1>
          <div className="space-x-2">
            <Button variant="outline">Save draft</Button>
            <Button onClick={handlePublish}>Publish</Button>
          </div>
        </div>

        <Tabs defaultValue="edit-job">
          <TabsList className="mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="edit-job">Edit Job</TabsTrigger>
            <TabsTrigger value="applicant-questions">
              Applicants Questions
              <span className="ml-2 text-xs bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded">NEW</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="edit-job">
            <form className="space-y-8">
              {/* Job Details Section */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-6">1. Job Details</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="title">Title*</Label>
                      <Input 
                        id="title"
                        placeholder="e.g. Software Engineer, Product Designer, etc."
                        value={formData.title}
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                      />
                    </div>

                    <div>
                      <Label>Description</Label>
                      <div className="border rounded-md mb-2">
                        <div className="flex items-center gap-1 p-2 border-b">
                          <Button variant="ghost" size="sm"><Bold className="h-4 w-4" /></Button>
                          <Button variant="ghost" size="sm"><Italic className="h-4 w-4" /></Button>
                          <Button variant="ghost" size="sm"><List className="h-4 w-4" /></Button>
                          <Button variant="ghost" size="sm"><Link2 className="h-4 w-4" /></Button>
                          <Button variant="ghost" size="sm"><HelpCircle className="h-4 w-4" /></Button>
                        </div>
                        <Textarea 
                          placeholder="Describe the responsibilities of the position. You can always change this later."
                          className="border-0"
                          value={formData.description}
                          onChange={(e) => setFormData({...formData, description: e.target.value})}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="position-type">Type of position*</Label>
                      <Select 
                        value={formData.positionType}
                        onValueChange={(value) => setFormData({...formData, positionType: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select position type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full-time">Full-time employee</SelectItem>
                          <SelectItem value="part-time">Part-time</SelectItem>
                          <SelectItem value="contract">Contract</SelectItem>
                          <SelectItem value="internship">Internship</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Location Section */}
                    <div className="space-y-4">
                      <h3 className="font-semibold">Location</h3>
                      <p className="text-sm text-gray-600">Add your location policy for this job.</p>
                      
                      <div>
                        <Label htmlFor="location">Location*</Label>
                        <Input 
                          id="location"
                          placeholder="e.g. San Francisco"
                          value={formData.location}
                          onChange={(e) => setFormData({...formData, location: e.target.value})}
                        />
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="relocation"
                            checked={formData.relocation}
                            onCheckedChange={(checked) => setFormData({...formData, relocation: checked})}
                          />
                          <Label htmlFor="relocation">Willing to accept applicants who need to relocate?</Label>
                        </div>

                        {formData.relocation && (
                          <div className="flex items-center space-x-2 ml-6">
                            <Checkbox 
                              id="relocation-assistance"
                              checked={formData.relocationAssistance}
                              onCheckedChange={(checked) => setFormData({...formData, relocationAssistance: checked})}
                            />
                            <Label htmlFor="relocation-assistance">Willing to offer relocation assistance?</Label>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Remote Work Section */}
                    <div className="space-y-4">
                      <h3 className="font-semibold">Remote Work Details</h3>
                      <p className="text-sm text-gray-600">
                        Wellfound is the number one site to find remote hires. This section ensures you will be matched with candidates that fit your needs.
                      </p>

                      <RadioGroup 
                        value={formData.remotePolicy}
                        onValueChange={(value) => setFormData({...formData, remotePolicy: value})}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="in-office" id="in-office" />
                          <Label htmlFor="in-office">In office</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="hybrid" id="hybrid" />
                          <Label htmlFor="hybrid">Hybrid</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="remote" id="remote" />
                          <Label htmlFor="remote">Remote only</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Salary & Equity Section */}
                    <div className="space-y-4">
                      <h3 className="font-semibold">Salary & Equity</h3>
                      <p className="text-sm text-gray-600">
                        Jobs without salaries are not returned in search results for candidates. If you'd rather not share these details, you can
                        always promote your job once it is published. Job posts that share details drive 30% more applicants on average.
                      </p>

                      <div>
                        <Label htmlFor="currency">Currency</Label>
                        <Select 
                          value={formData.currency}
                          onValueChange={(value) => setFormData({...formData, currency: value})}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select currency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="USD">United States Dollars ($)</SelectItem>
                            <SelectItem value="EUR">Euros (€)</SelectItem>
                            <SelectItem value="GBP">British Pounds (£)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="salary-min">Minimum Salary</Label>
                          <Input 
                            id="salary-min"
                            type="number"
                            placeholder="60,000"
                            value={formData.salaryMin}
                            onChange={(e) => setFormData({...formData, salaryMin: e.target.value})}
                          />
                        </div>
                        <div>
                          <Label htmlFor="salary-max">Maximum Salary</Label>
                          <Input 
                            id="salary-max"
                            type="number"
                            placeholder="70,000"
                            value={formData.salaryMax}
                            onChange={(e) => setFormData({...formData, salaryMax: e.target.value})}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recruiting Contact Section */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-6">2. Recruiting Contact</h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="recruiting-contact">Primary recruiting contact</Label>
                      <Select 
                        value={formData.recruitingContact}
                        onValueChange={(value) => setFormData({...formData, recruitingContact: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select primary contact" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="current-user">Current User</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Company Details Section */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-6">3. Company Details</h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="company-size">Company size</Label>
                      <Select 
                        value={formData.companySize}
                        onValueChange={(value) => setFormData({...formData, companySize: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 employees</SelectItem>
                          <SelectItem value="11-50">11-50 employees</SelectItem>
                          <SelectItem value="51-200">51-200 employees</SelectItem>
                          <SelectItem value="201-500">201-500 employees</SelectItem>
                          <SelectItem value="501+">501+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

