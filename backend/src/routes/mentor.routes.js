// mentor.routes.js
import express from 'express';
import { authenticate, authorize } from '../middlewares/auth.middleware.js';
import Mentor from '../models/mentor.model.js';

const router = express.Router();

router.use(express.json());

// Create Mentor Profile Route
router.post('/mentor', authenticate, authorize(['Mentor']), async (req, res) => {
  try {
    const mentorData = {
      ...req.body,
      user: req.user._id,
      reviews: req.body.reviews.map(review => ({
        ...review,
        user: req.user._id // Ensure user is set
      })),
      sessions: req.body.sessions.map(session => ({
        ...session,
        mentee: req.user._id // Ensure mentee is set
      }))
    };

    const mentor = new Mentor(mentorData);
    await mentor.save();
    res.status(201).send({ message: 'Mentor profile created successfully' });
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get Mentor Profile Route
router.get('/mentor/:id', authenticate, authorize(['Mentor']), async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.id);
    if (!mentor) {
      return res.status(404).send({ message: 'Mentor profile not found' });
    }
    res.send(mentor);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;