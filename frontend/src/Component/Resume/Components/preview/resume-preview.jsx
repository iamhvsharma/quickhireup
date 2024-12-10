"use client";

import { useResume } from "../../context/resume-context";
import { Card } from "@/components/ui/card";

export function ResumePreview() {
  const { data } = useResume();

  return (
    <Card className="h-full overflow-auto bg-white p-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            {data.personalDetails.firstName} {data.personalDetails.lastName}
          </h1>
          <p className="text-gray-600">{data.personalDetails.jobTitle}</p>
          <div className="mt-2 text-sm text-gray-500">
            <p>{data.personalDetails.address}</p>
            <p>
              {data.personalDetails.phone} | {data.personalDetails.email}
            </p>
          </div>
        </div>

        {/* Summary */}
        {data.summary && (
          <div>
            <h2 className="mb-2 text-lg font-semibold text-gray-900">Summary</h2>
            <p className="text-gray-600">{data.summary}</p>
          </div>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <div>
            <h2 className="mb-4 text-lg font-semibold text-gray-900">
              Professional Experience
            </h2>
            <div className="space-y-4">
              {data.experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {exp.positionTitle}
                      </h3>
                      <p className="text-gray-600">{exp.companyName}</p>
                    </div>
                    <p className="text-sm text-gray-500">
                      {exp.startDate} - {exp.endDate}
                    </p>
                  </div>
                  <p className="mt-2 text-gray-600">{exp.summary}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <div>
            <h2 className="mb-4 text-lg font-semibold text-gray-900">Education</h2>
            <div className="space-y-4">
              {data.education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">{edu.institute}</h3>
                      <p className="text-gray-600">
                        {edu.degree} in {edu.major}
                      </p>
                    </div>
                    <p className="text-sm text-gray-500">
                      {edu.startDate} - {edu.endDate}
                    </p>
                  </div>
                  <p className="mt-2 text-gray-600">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div>
            <h2 className="mb-4 text-lg font-semibold text-gray-900">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill) => (
                <span
                  key={skill.id}
                  className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
