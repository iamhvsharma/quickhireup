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

export function ExperienceForm() {
  const { data, updateData } = useResume();
  const [experiences, setExperiences] = useState(data.experience);

  const addExperience = () => {
    const newExperience = {
      id: uuidv4(),
      positionTitle: "",
      companyName: "",
      city: "",
      state: "",
      startDate: "",
      endDate: "",
      summary: "",
    };
    setExperiences([...experiences, newExperience]);
    updateData({ experience: [...experiences, newExperience] });
  };

  const updateExperience = (id, field, value) => {
    const updatedExperiences = experiences.map((exp) =>
      exp.id === id ? { ...exp, [field]: value } : exp
    );
    setExperiences(updatedExperiences);
    updateData({ experience: updatedExperiences });
  };

  const removeExperience = (id) => {
    const updatedExperiences = experiences.filter((exp) => exp.id !== id);
    setExperiences(updatedExperiences);
    updateData({ experience: updatedExperiences });
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
        "Professional Experience"
      ),
      React.createElement(
        "p",
        { className: "text-sm text-muted-foreground" },
        "Add your previous job experiences"
      )
    ),
    ...experiences.map((experience) =>
      React.createElement(
        Card,
        { key: experience.id },
        React.createElement(
          CardContent,
          { className: "pt-6" },
          React.createElement(
            "div",
            { className: "grid gap-4 sm:grid-cols-2" },
            React.createElement(
              "div",
              { className: "space-y-2" },
              React.createElement(Label, { htmlFor: `positionTitle-${experience.id}` }, "Position Title"),
              React.createElement(Input, {
                id: `positionTitle-${experience.id}`,
                value: experience.positionTitle,
                onChange: (e) =>
                  updateExperience(
                    experience.id,
                    "positionTitle",
                    e.target.value
                  ),
              })
            ),
            React.createElement(
              "div",
              { className: "space-y-2" },
              React.createElement(Label, { htmlFor: `companyName-${experience.id}` }, "Company Name"),
              React.createElement(Input, {
                id: `companyName-${experience.id}`,
                value: experience.companyName,
                onChange: (e) =>
                  updateExperience(
                    experience.id,
                    "companyName",
                    e.target.value
                  ),
              })
            ),
            React.createElement(
              "div",
              { className: "space-y-2" },
              React.createElement(Label, { htmlFor: `city-${experience.id}` }, "City"),
              React.createElement(Input, {
                id: `city-${experience.id}`,
                value: experience.city,
                onChange: (e) =>
                  updateExperience(experience.id, "city", e.target.value),
              })
            ),
            React.createElement(
              "div",
              { className: "space-y-2" },
              React.createElement(Label, { htmlFor: `state-${experience.id}` }, "State"),
              React.createElement(Input, {
                id: `state-${experience.id}`,
                value: experience.state,
                onChange: (e) =>
                  updateExperience(experience.id, "state", e.target.value),
              })
            ),
            React.createElement(
              "div",
              { className: "space-y-2" },
              React.createElement(Label, { htmlFor: `startDate-${experience.id}` }, "Start Date"),
              React.createElement(Input, {
                id: `startDate-${experience.id}`,
                type: "date",
                value: experience.startDate,
                onChange: (e) =>
                  updateExperience(
                    experience.id,
                    "startDate",
                    e.target.value
                  ),
              })
            ),
            React.createElement(
              "div",
              { className: "space-y-2" },
              React.createElement(Label, { htmlFor: `endDate-${experience.id}` }, "End Date"),
              React.createElement(Input, {
                id: `endDate-${experience.id}`,
                type: "date",
                value: experience.endDate,
                onChange: (e) =>
                  updateExperience(experience.id, "endDate", e.target.value),
              })
            )
          ),
          React.createElement(
            "div",
            { className: "mt-4 space-y-2" },
            React.createElement(Label, { htmlFor: `summary-${experience.id}` }, "Summary"),
            React.createElement(Textarea, {
              id: `summary-${experience.id}`,
              value: experience.summary,
              onChange: (e) =>
                updateExperience(experience.id, "summary", e.target.value),
              rows: 4,
            })
          ),
          React.createElement(
            Button,
            {
              variant: "destructive",
              size: "sm",
              className: "mt-4",
              onClick: () => removeExperience(experience.id),
            },
            React.createElement(Trash2, { className: "mr-2 h-4 w-4" }),
            "Remove Experience"
          )
        )
      )
    ),
    React.createElement(
      Button,
      { onClick: addExperience },
      React.createElement(PlusCircle, { className: "mr-2 h-4 w-4" }),
      "Add Experience"
    )
  );
}
