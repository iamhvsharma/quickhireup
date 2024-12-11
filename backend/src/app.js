import express from 'express';
import cors from 'cors';
import jobSeekerRoutes from './routes/jobseeker.routes.js';
import jobPostingRoutes from './routes/jobpostingform.routes.js';

const app = express();

// CORS configuration
app.use(cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded files statically
app.use('/uploads', express.static('uploads'));

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

export { app };
