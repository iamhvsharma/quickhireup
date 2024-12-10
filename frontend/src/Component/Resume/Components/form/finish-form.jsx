"use client";

import { useRef } from "react";
import { useResume } from "../../context/resume-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ResumePreview } from "../preview/resume-preview";
import { Download, Share2 } from "lucide-react";
import { usePDF } from "react-to-pdf";

export function FinishStep() {
  const { data } = useResume();
  const resumeRef = useRef(null);
  const { toPDF, targetRef } = usePDF({ filename: "resume.pdf" });

  const handleDownload = () => {
    if (resumeRef.current) {
      toPDF();
    }
  };

  const handleShare = () => {
    // Implement share functionality here
    alert("Share functionality to be implemented");
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Congratulations! Your resume is ready!</h2>
        <p className="text-muted-foreground">
          You can now download your resume or share it with others.
        </p>
      </div>
      <Card>
        <CardContent className="p-6">
          <div className="mb-4 flex justify-center space-x-4">
            <Button onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
            <Button variant="outline" onClick={handleShare}>
              <Share2 className="mr-2 h-4 w-4" />
              Share URL
            </Button>
          </div>
          <div ref={targetRef}>
            <ResumePreview />
          </div>
        </CardContent>
      </Card>
      <div className="text-center text-sm text-muted-foreground">
        <p>
          For better print quality, adjust your browser&apos;s print settings: save as PDF, disable
          headers and footers, set margins to none, and enable background graphics.
        </p>
      </div>
    </div>
  );
}
