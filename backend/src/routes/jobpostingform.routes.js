import express from 'express';
import JobPosting from '../models/jobpostingform.model.js';

const router = express.Router();

// Create job posting
router.post('/create', async (req, res) => {
  console.log('Received job posting request:', req.body);
  try {
    const jobPosting = new JobPosting(req.body);
    await jobPosting.save();
    console.log('Job posting saved:', jobPosting);
    
    res.status(201).json({
      success: true,
      message: 'Job posting created successfully',
      data: jobPosting
    });
  } catch (error) {
    console.error('Job posting error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create job posting',
      error: error.message
    });
  }
});

// Get all job postings
router.get('/all', async (req, res) => {
  try {
    const jobPostings = await JobPosting.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: jobPostings
    });
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch job postings',
      error: error.message
    });
  }
});

export default router;
