import mongoose, { Schema } from "mongoose";

const jobListingSchema = new Schema(
  {
    companyId: {
      type: Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 5000,
    },
    employmentType: {
      type: String,
      required: true,
      enum: ["Full-time", "Part-time", "Contract", "Internship", "Training"],
    },
    primaryRole: {
      type: String,
      required: true,
      enum: [
        "Software Engineer",
        "Mobile Developer",
        "Android Developer",
        "iOS Developer",
        "Web Developer",
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
        "DevOps Engineer",
        "Data Scientist",
        "Data Analyst",
        "Machine Learning Engineer",
        "AI Engineer",
        "Business Analyst",
        "Product Manager",
        "Project Manager",
        "UI/UX Designer",
        "Graphic Designer",
        "Marketing Specialist",
        "Sales Specialist",
        "Customer Support Specialist",
        "HR Specialist",
        "Other"
      ],
    },
    workExperience: {
      type: String,
      required: true,
      enum: ["0-2 years", "3-5 years", "6-8 years", "9-11 years", "12+ years"],
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    salaryRange: {
      type: String, // Example: "50,000 - 70,000 USD"
      required: false,
      trim: true,
    },
    skillsRequired: [
      {
        type: String,
        trim: true,
        required: true,
        maxlength: 50,
      },
    ],
    experienceRequired: {
      type: String, // Example: "0-2 years", "3-5 years"
      required: true,
    },
    applicationDeadline: {
      type: Date,
      required: false,
    },
    noOfOpenings: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["Draft", "Published", "Archived"],
      default: "Draft",
    },
    applicants: [
      {
        userId: { type: Schema.Types.ObjectId, ref: "User" },
        status: { type: String, enum: ["Applied", "Shortlisted", "Rejected"], default: "Applied" },
      },
    ],
  },
  { timestamps: true }
);

// Index to ensure a company can't post duplicate job titles
jobListingSchema.index({ companyId: 1, title: 1 }, { unique: true });

const JobListing = mongoose.model("JobListing", jobListingSchema);

export default JobListing;