"use client";

import { useState } from "react";
import { useResume } from "../../context/resume-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusCircle, Trash2, Star } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

export function SkillsForm() {
  const { data, updateData } = useResume();
  const [skills, setSkills] = useState(data.skills);
  const [newSkill, setNewSkill] = useState("");
  const [newRating, setNewRating] = useState(0);

  const addSkill = () => {
    if (newSkill.trim() !== "") {
      const skill = {
        id: uuidv4(),
        name: newSkill.trim(),
        rating: newRating,
      };
      const updatedSkills = [...skills, skill];
      setSkills(updatedSkills);
      updateData({ skills: updatedSkills });
      setNewSkill("");
      setNewRating(0);
    }
  };

  const removeSkill = (id) => {
    const updatedSkills = skills.filter((skill) => skill.id !== id);
    setSkills(updatedSkills);
    updateData({ skills: updatedSkills });
  };

  const handleRatingChange = (id, rating) => {
    const updatedSkills = skills.map((skill) =>
      skill.id === id ? { ...skill, rating } : skill
    );
    setSkills(updatedSkills);
    updateData({ skills: updatedSkills });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold">Skills</h2>
        <p className="text-sm text-muted-foreground">
          Add your top professional key skills
        </p>
      </div>
      <Card>
        <CardContent className="pt-6">
          <div className="grid gap-4 sm:grid-cols-[1fr,auto]">
            <div className="space-y-2">
              <Label htmlFor="newSkill">Skill Name</Label>
              <Input
                id="newSkill"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder="Enter a skill"
              />
            </div>
            <div className="space-y-2">
              <Label>Rating</Label>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setNewRating(star)}
                    className={`text-2xl ${
                      star <= newRating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    <Star className="h-6 w-6" />
                  </button>
                ))}
              </div>
            </div>
          </div>
          <Button onClick={addSkill} className="mt-4">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Skill
          </Button>
        </CardContent>
      </Card>
      <div className="space-y-4">
        {skills.map((skill) => (
          <Card key={skill.id}>
            <CardContent className="flex items-center justify-between pt-6">
              <div>
                <p className="font-medium">{skill.name}</p>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRatingChange(skill.id, star)}
                      className={`text-2xl ${
                        star <= skill.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    >
                      <Star className="h-4 w-4" />
                    </button>
                  ))}
                </div>
              </div>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => removeSkill(skill.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
