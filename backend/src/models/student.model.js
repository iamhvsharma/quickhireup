import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    // Basic Details
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true }, // Link to the User table
    avatar: { type: String }, // Cloudinary URL for profile picture
    name: { type: String, required: true }, // From users table
    email: { type: String, required: true, unique: true }, // From users table
    phone: { type: String }, // Optional contact number
    location: { type: String, required: true }, // "Where are you based?"
    gender: { type: String, enum: ["Male", "Female", "Non-binary", "Other"] },
    pronouns: { type: String }, // User's preferred pronouns

    // Educational Details
    institution: { type: String, required: true }, // College/University Name
    degree: { type: String, required: true }, // e.g., B.Tech, B.Sc, M.Sc
    fieldOfStudy: { type: String, required: true }, // e.g., Computer Science, Mechanical Engineering
    startYear: { type: Number, required: true }, // Year of Enrollment
    graduationYear: { type: Number, required: true }, // Expected Graduation Year
    cgpaOrPercentage: { type: String }, // Current CGPA or percentage
    courses: [{ type: String, maxlength: 50 }], // Relevant courses, max 5

    // Career Objectives
    careerGoals: { type: String, maxlength: 500 }, // "What are your career aspirations?"
    internshipPreferences: [
      {
        field: { type: String, required: true }, // e.g., Web Development, Data Analysis
        preferredLocation: { type: String }, // e.g., Remote, Specific City
        type: { type: String, enum: ["Part-Time", "Full-Time", "Remote"], required: true },
      },
    ],
    skills: [{ type: String, maxlength: 50 }], // Array of technical and soft skills, max 50
    projects: [
      {
        title: { type: String, required: true },
        description: { type: String, maxlength: 300 },
        liveLink: { type: String }, // Link to the live project, if any
        githubLink: { type: String }, // GitHub repository link
        media: [{ type: String, maxlength: 300 }], // Cloudinary URLs for media (max 3)
        skillsUsed: [{ type: String, maxlength: 20 }], // Skills used in the project
      },
    ],

    // Experience
    internships: [
      {
        companyName: { type: String },
        title: { type: String },
        startDate: { type: Date },
        endDate: { type: Date },
        currentlyWorking: { type: Boolean, default: false },
        description: { type: String, maxlength: 300 }, // Describe the internship role
      },
    ],
    trainings: [
      {
        title: { type: String, required: true },
        provider: { type: String, required: true }, // Training provider
        completionDate: { type: Date },
        certificationLink: { type: String }, // Link to certificate, if available
        description: { type: String, maxlength: 300 },
      },
    ],

    // Certifications
    certifications: [
      {
        title: { type: String, required: true },
        issuingOrganization: { type: String, required: true },
        issueDate: { type: Date },
        credentialLink: { type: String }, // Link to certification
      },
    ],

    // Preferences
    preferredTechnologies: [{ type: String, maxlength: 20 }], // Max 5
    unwillingTechnologies: [{ type: String, maxlength: 20 }], // Max 5
    openToRemote: { type: Boolean, default: false }, // "I’m open to work remotely"
    motivators: [
      { type: String, enum: ["Learning", "Problem Solving", "Building Products", "Collaboration"], maxlength: 30 },
    ], // Motivational factors for the student
    workEnvironmentPreferences: {
      clearResponsibilities: { type: Boolean, default: false },
      versatileAssignments: { type: Boolean, default: false },
    },

    // Additional Information
    bio: { type: String, maxlength: 1000 }, // Free-text bio
    achievements: { type: String, maxlength: 1000 }, // Notable achievements
    hobbies: [{ type: String, maxlength: 30 }], // Student's hobbies, max 5
    resume: { type: String }, // URL for uploaded resume
    portfolioWebsite: { type: String }, // Link to portfolio or personal website
    linkedinProfile: { type: String }, // LinkedIn URL
    githubProfile: { type: String }, // GitHub URL
    otherProfiles: [{ type: String }], // Links to other professional profiles (e.g., Kaggle, Behance)

    // Dashboard Details
    openToRoles: [{ type: String }], // Roles the student is open to
    availability: { type: String, enum: ["Immediate", "1 Month", "2+ Months"] }, // Availability for internships
    verificationStatus: { type: String, enum: ["Pending", "Verified", "Rejected"], default: "Pending" }, // Account verification status

    // Admin Tracking
    flaggedForReview: { type: Boolean, default: false }, // Admin use
  },
  { timestamps: true } // Automatically add createdAt and updatedAt fields
);

const Student = mongoose.model("Student", studentSchema);

export default Student;
