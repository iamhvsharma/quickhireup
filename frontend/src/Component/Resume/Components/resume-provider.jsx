"use client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ResumeProvider } from "../context /resume-context";
import { ResumeBuilder } from "./resume-builder";
// import Home from "@/components/Home";

function App() {
  return (
    <BrowserRouter>
      <ResumeProvider>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/resume" element={<ResumeBuilder />} />
        </Routes>
      </ResumeProvider>
    </BrowserRouter>
  );
}

export default App;
