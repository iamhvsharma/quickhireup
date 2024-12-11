import express from "express";
import cors from "cors";
import jobSeekerRoutes from './routes/jobseeker.routes.js';

const app = express();

// CORS configuration
app.use(cors({
    origin: 'http://localhost:5173', // Your frontend URL
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded files statically
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api', jobSeekerRoutes);

// Basic route for testing
app.get('/health', (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Server is running"
    });
});

export { app };
