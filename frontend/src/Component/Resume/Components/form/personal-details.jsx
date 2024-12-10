"use client";

import { useResume } from "../../context/resume-context";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function PersonalDetailsForm() {
  const { data, updateData } = useResume();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateData({
      personalDetails: {
        ...data.personalDetails,
        [name]: value,
      },
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold">Personal Details</h2>
        <p className="text-sm text-muted-foreground">
          Get started with the basic information
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            name="firstName"
            value={data.personalDetails.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            name="lastName"
            value={data.personalDetails.lastName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="jobTitle">Job Title</Label>
        <Input
          id="jobTitle"
          name="jobTitle"
          value={data.personalDetails.jobTitle}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Input
          id="address"
          name="address"
          value={data.personalDetails.address}
          onChange={handleChange}
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            value={data.personalDetails.phone}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={data.personalDetails.email}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}
 