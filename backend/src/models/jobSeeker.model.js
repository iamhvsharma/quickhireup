import mongoose from "mongoose";

const jobSeekerSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    location: { type: String, required: true },
    currentRole: { type: String, required: true },
    experienceYears: { type: Number, required: true },
    isStudentOrNewGrad: { type: Boolean, required: true },
    currentEmployer: {
      companyName: { type: String },
      jobTitle: { type: String },
      notEmployed: { type: Boolean, default: false },
    },
    linkedinProfile: { type: String },
    website: { type: String },
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
      currency: { type: String, required: true },
      amount: { type: Number, required: true },
    },
    rolePreference: { type: String },
    preferredLocation: { type: String },
    openToRemote: { type: Boolean, default: false },
    companySizePreferences: {
      seed: { type: String, enum: ["IDEAL", "YES", "NO"] },
      early: { type: String, enum: ["IDEAL", "YES", "NO"] },
      midSize: { type: String, enum: ["IDEAL", "YES", "NO"] },
      large: { type: String, enum: ["IDEAL", "YES", "NO"] },
      veryLarge: { type: String, enum: ["IDEAL", "YES", "NO"] },
      massive: { type: String, enum: ["IDEAL", "YES", "NO"] },
    },
    interestedTechnologies: [{ type: String, maxlength: 20 }],
    unwillingTechnologies: [{ type: String, maxlength: 20 }],
    motivators: {
      solvingProblems: { type: Boolean, default: false },
      buildingProducts: { type: Boolean, default: false },
    },
    careerTrack: { type: String, enum: ["Individual Contributor", "Manager"] },
    workEnvironment: {
      clearResponsibilities: { type: Boolean, default: false },
      versatileAssignments: { type: Boolean, default: false },
    },
    jobPriorities: [{ type: String, maxlength: 50 }],
    flexibleRemotePolicy: {
      type: String,
      enum: ["Very important", "Important", "Not important"],
    },
    quietOfficePreference: {
      type: String,
      enum: ["Very important", "Important", "Not important"],
    },
    nextJobDescription: { type: String, maxlength: 300 },
    resume: { type: String },
    emailVerified: { type: Boolean, default: false },
    verificationCode: { type: String },
    avatar: { type: String },
    openRoles: [{ type: String }],
    bio: { type: String, maxlength: 1000 },
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
    skills: [{ type: String, maxlength: 50 }],
    achievements: { type: String, maxlength: 1000 },
    pronouns: { type: String },
    genderIdentity: { type: String },
    certifications: [
      {
        title: { type: String, required: true },
        description: { type: String },
        url: { type: String },
        issuingOrganization: { type: String, required: true },
      },
    ],
    projects: [
      {
        title: { type: String, required: true },
        description: { type: String },
        media: [{ type: String, maxlength: 300 }],
        liveLink: { type: String },
        githubLink: { type: String },
        skills: [{ type: String, maxlength: 20 }],
      },
    ],
    appliedJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }], // New field for applied jobs
  },
  { timestamps: true }
);

const JobSeeker = mongoose.model("JobSeeker", jobSeekerSchema);

export default JobSeeker;