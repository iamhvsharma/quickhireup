import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Share2, X } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function CandidateProfile() {
  return (
    <div className="flex-1 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>LP</AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <div className="flex justify-between">
                <div>
                  <h1 className="text-xl font-semibold">Luan Pontolio (He/Him)</h1>
                  <p className="text-gray-600">
                    10 years of exp • São Paulo, Brazil • 9.5 hours behind • Open to remote
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Website</Button>
                  <Button variant="outline" size="sm">Resume</Button>
                </div>
              </div>

              <div className="mt-6">
                <h2 className="font-semibold mb-2">Looking for</h2>
                <p className="text-gray-600">
                  I acquired currently work as a Fullstack Web3 Developer. I always look to broaden my knowledge in the area
                  and enjoy participating in new projects, both Open Source and private. So, I am in love with technologies
                  and like to see how they interact with each other and create new opportunities.
                </p>
              </div>

              <div className="mt-6">
                <h2 className="font-semibold mb-4">Experience</h2>
                <div className="space-y-6">
                  {[
                    {
                      role: 'Tech Lead',
                      company: 'Nifty',
                      period: 'Aug 2022 to Present • 2 years 4 months',
                      technologies: ['Node.js', 'React', 'TypeScript']
                    },
                    {
                      role: 'Fullstack Web3 Developer',
                      company: 'GhostLabs',
                      period: 'Aug 2021 to Present • 3 years 4 months',
                      technologies: ['Node.js', 'React', 'Go']
                    }
                  ].map((job, index) => (
                    <div key={index} className="border-b pb-4">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium">{job.role}</h3>
                          <p className="text-gray-600">{job.company}</p>
                          <p className="text-sm text-gray-500">{job.period}</p>
                        </div>
                        <div className="flex gap-2">
                          {job.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">{tech}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-6 pt-6 border-t">
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="text-red-600">
                <X className="h-4 w-4 mr-2" />
                Not interested
              </Button>
              <Button size="sm">Request to chat</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

