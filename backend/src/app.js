
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import companyRoutes from "./routes/companyprofile.routes.js";
import jobListingRoutes from "./routes/jobListing.routes.js";
import jobSeekerRoutes from "./routes/jobseeker.routes.js";
import mentorRoutes from "./routes/mentor.routes.js";

import mentorshipListingRoutes from "./routes/mentorshipListing.routes.js";
import studentRoutes from "./routes/student.routes.js";
import jobPostingRoutes from './routes/jobpostingform.routes.js';
 


// Creating App
const app = express();


// Configuring Cors
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// CORS configuration
app.use(cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));


// Adding express.json middleware
app.use(express.json({ limit: "16kb" }));

// Adding URLencoded middleware
app.use(express.urlencoded({ extended: true, limit: "16kb" }));


// Adding Cookie Parser Middleware
app.use(cookieParser());

// Auth Route Signup login
app.use("/api/auth", authRoutes);

// Test route
app.get('/test', (req, res) => {
    res.json({ message: 'Server is working' });
});

// Routes
app.use('/api/jobseekers', jobSeekerRoutes);
app.use('/api/jobs', jobPostingRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Something went wrong!',
        error: err.message
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});


// Company Profile Creation Routes
app.use("/api/profile", companyRoutes);

// Job Listing Route for Company
app.use("/api/company", jobListingRoutes);



// Job Seeker Profile Creation Route
app.use("/api", jobSeekerRoutes);

// Student Profile Creation Route
app.use("/api/profile", studentRoutes);


// Mentor Profile Creation Route
app.use("/api/profile", mentorRoutes);

// Mentorship Listing Route
app.use("/api/listing", mentorshipListingRoutes);


export { app };