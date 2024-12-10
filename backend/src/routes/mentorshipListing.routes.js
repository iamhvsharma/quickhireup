// mentorshipListing.routes.js
import express from 'express';
import { authenticate, authorize } from '../middlewares/auth.middleware.js';
import MentorshipListing from '../models/mentorshipListing.model.js';
import Mentor from '../models/mentor.model.js';

const router = express.Router();

// Create Mentorship Listing Route
router.post('/mentorship', authenticate, authorize(['Mentor']), async (req, res) => {
  try {
    const mentor = await Mentor.findOne({ user: req.user._id });
    if (!mentor) {
      return res.status(404).send({ message: 'Mentor profile not found' });
    }
    const mentorshipListing = new MentorshipListing({ ...req.body, mentor: mentor._id });
    await mentorshipListing.save();
    res.status(201).send({ message: 'Mentorship listing created successfully' });
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get Mentorship Listings Route
router.get('/mentorships', authenticate, async (req, res) => {
  try {
    const mentorshipListings = await MentorshipListing.find().populate('mentor');
    res.send(mentorshipListings);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;