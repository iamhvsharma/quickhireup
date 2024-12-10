import React from "react";
import { ResumeProvider } from "./context/resume-context";
import { ResumeBuilder } from "./Components/resume-builder";

export default function Page() {
  return (
    <ResumeProvider>
      <ResumeBuilder />
    </ResumeProvider>
  );
}
