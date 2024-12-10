import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import companyRoutes from "./routes/companyprofile.routes.js";
import jobListingRoutes from "./routes/jobListing.routes.js";
import jobSeekerRoutes from "./routes/jobseeker.routes.js";
import mentorRoutes from "./routes/mentor.routes.js";
import memtorshipListingRoutes from "./routes/mentorshipListing.routes.js";
import mentorshipListingRoutes from "./routes/mentorshipListing.routes.js";
import studentRoutes from "./routes/student.routes.js";
import quizRoutes from "./routes/quiz.routes.js";


// Creating App
const app = express();

// Configuring Cors
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// Adding express.json middleware
app.use(express.json({ limit: "16kb" }));

// Adding URLencoded middleware
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Adding Cookie Parser Middleware
app.use(cookieParser());

// Auth Route Signup login
app.use("/api/auth", authRoutes);

// Company Profile Creation Routes
app.use("/api/profile", companyRoutes);

// Job Listing Route for Company
app.use("/api/company", jobListingRoutes);

// Job Seeker Profile Creation Route
app.use("/api/profile", jobSeekerRoutes);

// Student Profile Creation Route
app.use("/api/profile", studentRoutes);


// Mentor Profile Creation Route
app.use("/api/profile", mentorRoutes);

// Mentorship Listing Route
app.use("/api/listing", mentorshipListingRoutes);

// Quiz Route 
app.use('/api/quiz', quizRoutes);


export { app };
