import express from 'express';
import { authenticate, authorize } from '../middlewares/auth.middleware.js';
import JobSeeker from '../models/jobSeeker.model.js';

const router = express.Router();
router.use(express.json());

// Create Job Seeker Profile Route
router.post('/jobseeker', authenticate, authorize(['Job Seeker']), async (req, res) => {
  try {
    const jobSeeker = new JobSeeker({ ...req.body, userId: req.user._id });
    await jobSeeker.save();
    res.status(201).send({ message: 'Job Seeker profile created successfully' });
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
    console.log('Authenticated User:', req.user);

    
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

export default router;





