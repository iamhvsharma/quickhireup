"use client";

import React, { useState } from "react";
import { useResume } from "../../context/resume-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle, Trash2 } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

export function EducationForm() {
  const { data, updateData } = useResume();
  const [educations, setEducations] = useState(data.education);

  const addEducation = () => {
    const newEducation = {
      id: uuidv4(),
      institute: "",
      degree: "",
      major: "",
      startDate: "",
      endDate: "",
      description: "",
    };
    setEducations([...educations, newEducation]);
    updateData({ education: [...educations, newEducation] });
  };

  const updateEducation = (id, field, value) => {
    const updatedEducations = educations.map((edu) =>
      edu.id === id ? { ...edu, [field]: value } : edu
    );
    setEducations(updatedEducations);
    updateData({ education: updatedEducations });
  };

  const removeEducation = (id) => {
    const updatedEducations = educations.filter((edu) => edu.id !== id);
    setEducations(updatedEducations);
    updateData({ education: updatedEducations });
  };

  return React.createElement(
    "div",
    { className: "space-y-6" },
    React.createElement(
      "div",
      null,
      React.createElement(
        "h2",
        { className: "text-lg font-semibold" },
        "Education"
      ),
      React.createElement(
        "p",
        { className: "text-sm text-muted-foreground" },
        "Add your educational background"
      )
    ),
    educations.map((education) =>
      React.createElement(
        Card,
        { key: education.id },
        React.createElement(
          CardContent,
          { className: "pt-6" },
          React.createElement(
            "div",
            { className: "grid gap-4 sm:grid-cols-2" },
            React.createElement(
              "div",
              { className: "space-y-2" },
              React.createElement(Label, { htmlFor: `institute-${education.id}` }, "Institute"),
              React.createElement(Input, {
                id: `institute-${education.id}`,
                value: education.institute,
                onChange: (e) =>
                  updateEducation(education.id, "institute", e.target.value),
              })
            ),
            React.createElement(
              "div",
              { className: "space-y-2" },
              React.createElement(Label, { htmlFor: `degree-${education.id}` }, "Degree"),
              React.createElement(Input, {
                id: `degree-${education.id}`,
                value: education.degree,
                onChange: (e) =>
                  updateEducation(education.id, "degree", e.target.value),
              })
            ),
            React.createElement(
              "div",
              { className: "space-y-2" },
              React.createElement(Label, { htmlFor: `major-${education.id}` }, "Major"),
              React.createElement(Input, {
                id: `major-${education.id}`,
                value: education.major,
                onChange: (e) =>
                  updateEducation(education.id, "major", e.target.value),
              })
            ),
            React.createElement(
              "div",
              { className: "space-y-2" },
              React.createElement(Label, { htmlFor: `startDate-${education.id}` }, "Start Date"),
              React.createElement(Input, {
                id: `startDate-${education.id}`,
                type: "date",
                value: education.startDate,
                onChange: (e) =>
                  updateEducation(education.id, "startDate", e.target.value),
              })
            ),
            React.createElement(
              "div",
              { className: "space-y-2" },
              React.createElement(Label, { htmlFor: `endDate-${education.id}` }, "End Date"),
              React.createElement(Input, {
                id: `endDate-${education.id}`,
                type: "date",
                value: education.endDate,
                onChange: (e) =>
                  updateEducation(education.id, "endDate", e.target.value),
              })
            )
          ),
          React.createElement(
            "div",
            { className: "mt-4 space-y-2" },
            React.createElement(Label, { htmlFor: `description-${education.id}` }, "Description"),
            React.createElement(Textarea, {
              id: `description-${education.id}`,
              value: education.description,
              onChange: (e) =>
                updateEducation(education.id, "description", e.target.value),
              rows: 4,
            })
          ),
          React.createElement(
            Button,
            {
              variant: "destructive",
              size: "sm",
              className: "mt-4",
              onClick: () => removeEducation(education.id),
            },
            React.createElement(Trash2, { className: "mr-2 h-4 w-4" }),
            "Remove Education"
          )
        )
      )
    ),
    React.createElement(
      Button,
      { onClick: addEducation },
      React.createElement(PlusCircle, { className: "mr-2 h-4 w-4" }),
      "Add Education"
    )
  );
}
