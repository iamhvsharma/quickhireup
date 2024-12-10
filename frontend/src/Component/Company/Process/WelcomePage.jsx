import React from "react";
import { Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function WelcomePage() {
  const navigate = useNavigate(); // Initialize the navigate function from React Router

  const handleNext = () => {
    navigate('/FindTalent'); // Navigate to the FindTalent page
  };

  const handleNext2 = () => {
    navigate('/PostJob'); // Navigate to the PostJob page
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-black p-6">
        <div className="text-white text-2xl font-bold mb-8">QuickHireUp</div>
        <nav className="space-y-4">
          <div className="flex items-center space-x-3 text-white">
            <div className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>
            <span>Set up your account</span>
          </div>
          <div className="flex items-center space-x-3 text-white bg-blue-600 -mx-6 px-6 py-2">
            <div className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>
            <span>Invite your team</span>
          </div>
          <div className="flex items-center space-x-3 text-white">
            <div className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>
            <span>Start recruiting</span>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">You're all set!</h1>
        
        <p className="text-lg text-gray-600 mb-8">
          Dive into our vast pool of 8M+ candidates eager for their perfect match. Whether 
          you're seeking a seasoned professional or fresh talent, Wellfound offers two seamless 
          paths: <span className="font-medium">source talent directly</span> or <span className="font-medium">post a job for free</span>. Your journey to discovering 
          standout hires starts here.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            variant="outline" 
            size="lg" 
            className="flex-1 h-12 text-base font-medium" 
            onClick={handleNext}
          >
            <Users className="mr-2 h-5 w-5" />
            Find Talent
          </Button>
          
          <Button 
            size="lg" 
            className="flex-1 h-12 text-base font-medium bg-black hover:bg-black/90" 
            onClick={handleNext2}
          >
            <Briefcase className="mr-2 h-5 w-5" />
            Post a Job
          </Button>
        </div>
      </div>
    </div>
  );
}
