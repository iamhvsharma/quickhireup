import express from 'express';
import { authenticate, authorize } from '../middlewares/auth.middleware.js';
import upload from '../middlewares/upload.js';
import JobSeeker from '../models/jobSeeker.model.js';

const router = express.Router();

// Create Job Seeker Profile Route - using multer middleware for file upload
router.post('/jobseeker', upload.single('resume'), async (req, res) => {
  try {
    // Parse the stringified JSON back to objects
    const jobPreferences = JSON.parse(req.body.jobPreferences);
    const culturalPreferences = JSON.parse(req.body.culturalPreferences);

    // Create new job seeker profile
    const jobSeeker = new JobSeeker({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      title: req.body.title,
      bio: req.body.bio,
      email: req.body.email,
      jobPreferences,
      culturalPreferences,
      resume: req.file ? {
        url: req.file.path,
        fileName: req.file.originalname
      } : null
    });

    // Save to database
    await jobSeeker.save();

    res.status(201).json({
      success: true,
      message: 'Profile created successfully',
      data: jobSeeker
    });

  } catch (error) {
    console.error('Error creating profile:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating profile',
      error: error.message
    });
  }
});

// Get Job Seeker Profile
router.get('/jobseeker', authenticate, authorize(['Job Seeker']), async (req, res) => {
  try {
    const jobSeeker = await JobSeeker.findOne({ userId: req.user._id });
    if (!jobSeeker) {
      return res.status(404).send({ error: 'Profile not found' });
    }
    res.send(jobSeeker);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update Job Seeker Profile
router.put('/jobseeker', authenticate, authorize(['Job Seeker']), async (req, res) => {
  try {
    const jobSeeker = await JobSeeker.findOneAndUpdate(
      { userId: req.user._id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!jobSeeker) {
      return res.status(404).send({ error: 'Profile not found' });
    }
    res.send(jobSeeker);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete Job Seeker Profile
router.delete('/jobseeker', authenticate, authorize(['Job Seeker']), async (req, res) => {
  try {
    const jobSeeker = await JobSeeker.findOneAndDelete({ userId: req.user._id });
    if (!jobSeeker) {
      return res.status(404).send({ error: 'Profile not found' });
    }
    res.send({ message: 'Profile deleted successfully' });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Create/Update Basic Info
router.post('/profile/basic', authenticate, async (req, res) => {
  try {
    const { firstName, lastName, title, bio } = req.body;
    
    let jobSeeker = await JobSeeker.findOneAndUpdate(
      { _id: req.user.id },
      { firstName, lastName, title, bio },
      { new: true, upsert: true }
    );

    res.json(jobSeeker);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Job Preferences
router.post('/profile/preferences', authenticate, async (req, res) => {
  try {
    const { jobType, location, salary, remote } = req.body;
    
    const jobSeeker = await JobSeeker.findOneAndUpdate(
      { _id: req.user.id },
      { jobPreferences: { jobType, location, salary, remote } },
      { new: true }
    );

    res.json(jobSeeker);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Cultural Preferences
router.post('/profile/culture', authenticate, async (req, res) => {
  try {
    const { workStyle, teamSize, companySize, industry } = req.body;
    
    const jobSeeker = await JobSeeker.findOneAndUpdate(
      { _id: req.user.id },
      { culturalPreferences: { workStyle, teamSize, companySize, industry } },
      { new: true }
    );

    res.json(jobSeeker);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Upload Resume
router.post('/profile/resume', authenticate, upload.single('resume'), async (req, res) => {
  try {
    const jobSeeker = await JobSeeker.findOneAndUpdate(
      { _id: req.user.id },
      { 
        resume: {
          url: req.file.path,
          fileName: req.file.originalname
        }
      },
      { new: true }
    );

    res.json(jobSeeker);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Verify Email
router.post('/profile/verify-email', authenticate, async (req, res) => {
  try {
    const { verificationCode } = req.body;
    
    const jobSeeker = await JobSeeker.findOne({ _id: req.user.id });
    
    if (jobSeeker.verificationCode !== verificationCode) {
      return res.status(400).json({ message: 'Invalid verification code' });
    }

    jobSeeker.isEmailVerified = true;
    jobSeeker.verificationCode = undefined;
    await jobSeeker.save();

    res.json({ message: 'Email verified successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;





