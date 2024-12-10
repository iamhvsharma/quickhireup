"use client";

import { useResume } from "../../context/resume-context";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function SummaryForm() {
  const { data, updateData } = useResume();

  const handleChange = (e) => {
    updateData({ summary: e.target.value });
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold">Summary</h2>
        <p className="text-sm text-muted-foreground">
          Add a brief summary about your professional background
        </p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="summary">Summary</Label>
        <Textarea
          id="summary"
          rows={6}
          value={data.summary}
          onChange={handleChange}
          placeholder="Enter a brief summary of your professional experience and skills..."
        />
      </div>
    </div>
  );
}
