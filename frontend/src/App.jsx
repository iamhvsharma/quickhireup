import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resume from "./Component/Resume/resume";
import LandingPage from "./Component/LandingPage/LandingPage";
import OnBoard from "./Component/Company/Process/onBoard";
import Jobs from "./Component/Job/ApplyForm";
import CompanyProfile from "./Component/Company/Process/CreateAccount";
import Welcome from "./Component/Company/Process/WelcomePage";
import FindTalent from "./Component/Company/Telent/talent-sourcing";
import PostJob from "./Component/Company/JobPosting/job-posting-form";
import CreateProfile from "./Component/Profile/Build/Components/CreateProfile";
import Mentor from "./Component/Mentor/LandingPage";
import BecomeMentorForm from "./Component/Mentor/components/BecomeMentorForm";
import BuildProfile from "./Component/Profile/Build/BuildProfile";
import StudentProfileWizard from "./Component/Profile/Student/StudentProfileWizard";
import { StudentProfileProvider } from "@/contexts/StudentProfileContext";
import { JobPreferencesProvider } from "@/contexts/JobPreferencesContext";
import AiResume from './Component/Resume/resume'
import AiMock from './Component/AIMockInterview/AIMockInterview'
import JobListings from "./Component/Company/Dashboard/JobListing/JobsList";
import MentorProfileForm from "./Component/Mentor/components/MentorProfile/MentorProfile";
import CompnayDashboard from "./Component/Company/Dashboard/Profile/Dashboard";
import JobsPage from './Component/Company/Jobs/JobsPage';
import ApplicationsPage from './Component/Company/Dashboard/Applications/ApplicationsPage';
import MentorList from "./Component/Mentor/components/MentorProfile/MentorList";
import JobListingCard from "./Component/Job/Seeker/JobList/JobListingCard";
import SeekerJobListing from "./Component/Job/Seeker/JobList/SeekerJobListing";
import UserDashboardWizard from "./Component/Job/userDashboard/UserDashboardWizard";
import DashboardLayout from "./Component/Job/Dashboard/DashboardLayout";
import SavedJobs from "./Component/Job/Dashboard/SavedJobs";
import MyApplications from "./Component/Job/Dashboard/MyApplications";
import DashboardSettings from "./Component/Job/Dashboard/Settings";
import AiChatBot from './Component/AiChatBot/page'
import StudentDashboard from './Component/Student/Dashboard/StudentDashboard'
import ProfileForm from './Component/Job/Create-Profile/ProfileForm'

import UnifiedAuth from "./Component/Auth/UnifiedAuth";
import ApplicationDetails from "./Component/Company/Dashboard/Applications/ApplicationDetails";
import { AuthProvider } from "./Component/Auth/context/AuthContext";
import { Toaster } from "./components/ui/toaster";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// In your routes configuration:

const App = () => {
  return (

    <>
     
       

    
      <StudentProfileProvider>
        <JobPreferencesProvider>
          <AuthProvider>
          <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/student/onboarding" element={<StudentProfileWizard />} />
              <Route path="/jobseeker/onboarding" element={<BuildProfile />}></Route>
              <Route path="/resume" element={<Resume />} />
              {/* <Route path="/company" element={<Company />} /> */}
              <Route path="/company/onboarding" element={<OnBoard />} />
              <Route path="/register" element={<Jobs />} />
              <Route path="/CreateProfile" element={<CreateProfile />} />
              <Route path="/WelcomePage" element={<Welcome />} />
              <Route path="/FindTalent" element={<FindTalent />} />
              <Route path="/PostJob" element={<PostJob />} />
              <Route path="/CompanyProfile" element={<CompanyProfile />} />
              <Route path="/StudentDashboard" element={<StudentDashboard />} />
           
              <Route path="/Mentor" element={<Mentor />} />
              <Route path="/become-Mentor" element={<BecomeMentorForm />} />
              <Route path="/MentorProfile" element={<MentorProfileForm />}/>
              <Route path="/AiResume" element={<AiResume />} />
              <Route path="/JobList" element={<JobListings />} />
              <Route path="/AiMock" element={<AiMock/>} />
              <Route path="/AiChatBot" element={<AiChatBot/>} />


                <Route path="/create-profile" element={<ProfileForm />} />             
                <Route path="/CompanyDashboard" element={<CompnayDashboard/>} />
                <Route path="/jobs" element={<JobsPage />} />
                <Route path="/applications" element={<ApplicationsPage />} />
                <Route path="/MentorList" element={<MentorList />} />
                <Route path="/mentors" element={<MentorList />} />
                <Route path="/JobListingCard" element={<JobListingCard />} />
                <Route path="/SeekerJobListing" element={<SeekerJobListing />} />
                <Route path="/UserDashboardWizard" element={<UserDashboardWizard />} />
                <Route path="/JobDashboard" element={<DashboardLayout />}>
                  <Route path="profile" element={<UserDashboardWizard />} />
                  <Route path="jobs" element={<SavedJobs />} />
                </Route>
                <Route path="/dashboard" element={<DashboardLayout />}>
                  <Route path="profile" element={<UserDashboardWizard />} />
                  <Route path="saved-jobs" element={<SavedJobs />} />
                  <Route path="applications" element={<MyApplications />} />
                  <Route path="settings" element={<DashboardSettings />} />
                </Route>
                <Route path="/student/dashboard" element={<DashboardLayout />}>
                  <Route index element={<StudentDashboard />} />
                  {/* <Route path="learning" element={<Learning />} />
                  <Route path="internships" element={<Internships />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="courses" element={<Courses />} />
                  <Route path="settings" element={<Settings />} />
                  <Route path="help" element={<Help />} /> */}
                </Route>
                <Route path="/company/applications/:id" element={<ApplicationDetails />} />
                <Route path="/Auth">
                  <Route path="login" element={<UnifiedAuth type="login" />} />
                  <Route path="register" element={<UnifiedAuth type="register" />} />
                </Route>

               
             
              </Routes>
            </Router>
            </AuthProvider>
          </JobPreferencesProvider>
        </StudentProfileProvider>

      <Toaster />
      <ToastContainer position="top-right" />
    </>

  );
};

export default App;
