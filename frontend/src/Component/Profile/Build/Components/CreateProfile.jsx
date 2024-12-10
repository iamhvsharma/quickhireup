import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ProfileTab() {

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      location: formData.get("location"),
      role: formData.get("role"),
      experience: formData.get("experience"),
      bio: formData.get("bio"),
      website: formData.get("website"),
      linkedin: formData.get("linkedin"),
      github: formData.get("github"),
      twitter: formData.get("twitter"),
    };
    updateProfileSection("profile", data);
  };

  return (
    <ProfileProvider>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-2">About</h2>
          <p className="text-sm text-gray-500 mb-4">
            Tell us about yourself so startups know who you are.
          </p>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Your name*</Label>
              <Input
                id="name"
                name="name"
                value={profile.name}
                onChange={(e) =>
                  updateProfileSection("profile", { name: e.target.value })
                }
                placeholder="Your name"
              />
            </div>
            <div>
              <Label htmlFor="photo">Profile photo</Label>
              <div className="mt-2">
                <Button variant="outline">Upload a new photo</Button>
              </div>
            </div>
            <div>
              <Label htmlFor="location">Where are you based?*</Label>
              <Input
                id="location"
                name="location"
                value={profile.location}
                onChange={(e) =>
                  updateProfileSection("profile", { location: e.target.value })
                }
                placeholder="Jaipur, Rajasthan"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="role">Select your primary role*</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue value={profile.role} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="frontend">Frontend Engineer</SelectItem>
                    <SelectItem value="backend">Backend Engineer</SelectItem>
                    <SelectItem value="fullstack">
                      Fullstack Engineer
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="experience">Years of experience*</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue value={profile.experience} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-1">{"< 1 Year"}</SelectItem>
                    <SelectItem value="1-3">1-3 Years</SelectItem>
                    <SelectItem value="3-5">3-5 Years</SelectItem>
                    <SelectItem value="5+">5+ Years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="bio">Your bio</Label>
              <Textarea
                id="bio"
                name="bio"
                value={profile.bio}
                onChange={(e) =>
                  updateProfileSection("profile", { bio: e.target.value })
                }
                placeholder="Stanford CS, Full stack generalist; launched a successful Android app, worked at Google"
                className="h-24"
              />
              <p className="text-sm text-gray-500 mt-1">
                160 characters remaining
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Social Profiles</h2>
          <p className="text-sm text-gray-500 mb-4">
            Where can people find you online?
          </p>
          <div className="space-y-4">
            <div>
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                name="website"
                value={profile.website}
                onChange={(e) =>
                  updateProfileSection("profile", { website: e.target.value })
                }
                placeholder="https://"
              />
            </div>
            <div>
              <Label htmlFor="linkedin">LinkedIn</Label>
              <Input
                id="linkedin"
                name="linkedin"
                value={profile.linkedin}
                onChange={(e) =>
                  updateProfileSection("profile", { linkedin: e.target.value })
                }
                placeholder="https://linkedin.com/in/username"
              />
            </div>
            <div>
              <Label htmlFor="github">GitHub</Label>
              <Input
                id="github"
                name="github"
                value={profile.github}
                onChange={(e) =>
                  updateProfileSection("profile", { github: e.target.value })
                }
                placeholder="https://github.com/username"
              />
            </div>
            <div>
              <Label htmlFor="twitter">Twitter</Label>
              <Input
                id="twitter"
                name="twitter"
                value={profile.twitter}
                onChange={(e) =>
                  updateProfileSection("profile", { twitter: e.target.value })
                }
                placeholder="https://twitter.com/username"
              />
            </div>
          </div>
        </div>
        <Button type="submit">Save Changes</Button>
      </form>
    </ProfileProvider>
  );
}
