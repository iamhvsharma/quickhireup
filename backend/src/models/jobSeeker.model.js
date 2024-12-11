import mongoose from "mongoose";

const jobSeekerSchema = new mongoose.Schema(
  {
    // Basic Info
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    title: { type: String, required: true },
    bio: { type: String, required: true },
    
    // Preferences
    jobPreferences: {
      jobType: { type: String, enum: ['full-time', 'part-time', 'contract'] },
      location: String,
      salary: Number,
      remote: Boolean
    },

    // Culture
    culturalPreferences: {
      workStyle: { type: String, enum: ['collaborative', 'independent', 'mixed'] },
      teamSize: { type: String, enum: ['small', 'medium', 'large'] },
      companySize: String,
      industry: String
    },

    // Resume
    resume: {
      url: String,
      fileName: String
    },

    // Email verification
    email: { type: String, required: true, unique: true },
    isEmailVerified: { type: Boolean, default: false },
    verificationCode: String,

    // Timestamps
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  }
);

const JobSeeker = mongoose.model("JobSeeker", jobSeekerSchema);

export default JobSeeker;