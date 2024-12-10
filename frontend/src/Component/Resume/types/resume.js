// Define the structure of resume data using plain JavaScript objects

const PersonalDetails = {
    firstName: "",
    lastName: "",
    jobTitle: "",
    address: "",
    phone: "",
    email: "",
  };
  
  const Experience = {
    id: "",
    positionTitle: "",
    companyName: "",
    city: "",
    state: "",
    startDate: "",
    endDate: "",
    summary: "",
  };
  
  const Education = {
    id: "",
    institute: "",
    degree: "",
    major: "",
    startDate: "",
    endDate: "",
    description: "",
  };
  
  const Skill = {
    id: "",
    name: "",
    rating: 0,
  };
  
  const ResumeData = {
    personalDetails: PersonalDetails,
    summary: "",
    experience: [Experience],
    education: [Education],
    skills: [Skill],
  };
  
  // Define possible steps as an array of strings
  const StepKey = ["personal", "summary", "experience", "education", "skills", "finish"];
  