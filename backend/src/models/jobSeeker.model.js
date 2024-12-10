import mongoose from "mongoose";

const jobSeekerSchema = new mongoose.Schema(
  {
    // Basic Details
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true }, // From users table
    location: { type: String, required: true }, // "Where are you based?"
    currentRole: { type: String, required: true }, // "What best describes your current role?"
    experienceYears: { type: Number, required: true }, // "How many years of experience do you have?"
    isStudentOrNewGrad: { type: Boolean, required: true }, // "Are you a student or new grad?"
    currentEmployer: {
      companyName: { type: String },
      jobTitle: { type: String },
      notEmployed: { type: Boolean, default: false }, // Checkbox: "I’m not currently employed"
    },
    linkedinProfile: { type: String }, // URL
    website: { type: String }, // URL

    // Job Preferences
    jobSearchStatus: {
      readyToInterview: { type: Boolean, default: false },
      openToOffers: { type: Boolean, default: false },
      closedToOffers: { type: Boolean, default: false },
    },
    jobTypeInterest: {
      fullTime: { type: Boolean, default: false },
      contractor: { type: Boolean, default: false },
      intern: { type: Boolean, default: false },
      coFounder: { type: Boolean, default: false },
    },
    desiredSalary: {
      currency: { type: String, required: true }, // Currency code (e.g., USD, INR)
      amount: { type: Number, required: true },
    },
    rolePreference: { type: String }, // "What kind of role are you looking for?"
    preferredLocation: { type: String }, // "What location do you want to work in?"
    openToRemote: { type: Boolean, default: false }, // "I’m open to work remotely"

    // Company Size Preferences
    companySizePreferences: {
      seed: { type: String, enum: ["IDEAL", "YES", "NO"] },
      early: { type: String, enum: ["IDEAL", "YES", "NO"] },
      midSize: { type: String, enum: ["IDEAL", "YES", "NO"] },
      large: { type: String, enum: ["IDEAL", "YES", "NO"] },
      veryLarge: { type: String, enum: ["IDEAL", "YES", "NO"] },
      massive: { type: String, enum: ["IDEAL", "YES", "NO"] },
    },

    // Technology Preferences
    interestedTechnologies: [{ type: String, maxlength: 20 }], // Max 5
    unwillingTechnologies: [{ type: String, maxlength: 20 }], // Max 5

    // Work Preferences
    motivators: {
      solvingProblems: { type: Boolean, default: false },
      buildingProducts: { type: Boolean, default: false },
    },
    careerTrack: { type: String, enum: ["Individual Contributor", "Manager"] },
    workEnvironment: {
      clearResponsibilities: { type: Boolean, default: false },
      versatileAssignments: { type: Boolean, default: false },
    },
    jobPriorities: [{ type: String, maxlength: 50 }], // Max 2 priorities
    flexibleRemotePolicy: {
      type: String,
      enum: ["Very important", "Important", "Not important"],
    },
    quietOfficePreference: {
      type: String,
      enum: ["Very important", "Important", "Not important"],
    },
    nextJobDescription: { type: String, maxlength: 300 }, // Free-text input
    resume: { type: String }, // URL for resume file storage

    // Verification
    emailVerified: { type: Boolean, default: false },
    verificationCode: { type: String },

    // Profile Dashboard Details
    avatar: { type: String }, // Cloudinary URL
    openRoles: [{ type: String }], // Array of roles user is open to
    bio: { type: String, maxlength: 1000 }, // Free-text bio
    experience: [
      {
        companyName: { type: String },
        title: { type: String },
        startDate: { type: Date },
        endDate: { type: Date },
        currentlyWorking: { type: Boolean, default: false },
        description: { type: String },
      },
    ],
    education: [
      {
        institution: { type: String },
        graduationDate: { type: Date },
        degreeType: { type: String },
        specialization: { type: String },
        cgpaOrPercentage: { type: String },
      },
    ],
    skills: [{ type: String, maxlength: 50 }], // Array of skills, max 50
    achievements: { type: String, maxlength: 1000 }, // Free-text achievements
    pronouns: { type: String }, // User's preferred pronouns
    genderIdentity: { type: String }, // User's gender identity
    certifications: [ // Array of certifications
      {
        title: { type: String, required: true },
        description: { type: String },
        url: { type: String }, // Certificate URL
        issuingOrganization: { type: String, required: true },
      },
    ],

    // Projects
    projects: [
      {
        title: { type: String, required: true },
        description: { type: String },
        media: [{ type: String, maxlength: 300 }], // Cloudinary URLs (max 3)
        liveLink: { type: String }, // Project live link
        githubLink: { type: String }, // GitHub repository link
        skills: [{ type: String, maxlength: 20 }], // Related skills
      },
    ],
  },
  { timestamps: true } // Automatically add createdAt and updatedAt fields
);

const JobSeeker = mongoose.model("JobSeeker", jobSeekerSchema);

export default JobSeeker;
