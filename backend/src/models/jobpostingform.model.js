import mongoose from 'mongoose';

// Define the schema for the job posting
const JobPostingSchema = new mongoose.Schema(
  {
    jobTitle: { type: String, required: true },
    organizationName: { type: String, required: true },
    jobType: { type: String, required: true }, // e.g., NGO, Corporate
    workType: { type: String, required: true }, // e.g., Work from home, On-site
    startDate: { type: Date, required: true },
    duration: { type: Number, required: true }, // in months
    stipend: { type: String, required: true },
    applyBy: { type: Date, required: true },
    description: { type: String, required: true },
    responsibilities: { type: [String], required: true }, // Array of strings
    skills: { type: String },
    eligibility: { type: [String], default: [] },
    perks: { type: [String], default: [] },
    openings: { type: Number },
    aboutOrganization: { type: String }
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Create a model from the schema
const JobPosting = mongoose.model('JobPosting', JobPostingSchema);

export default JobPosting;
