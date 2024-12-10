// student.routes.js
import express from 'express';
import { authenticate, authorize } from '../middlewares/auth.middleware.js';
import Student from '../models/student.model.js';

const router = express.Router();

// Create Student Profile Route
router.post('/student', authenticate, authorize(['Student']), async (req, res) => {
  try {
    const { userId, name, email, location, institution, degree, fieldOfStudy, startYear, graduationYear } = req.body;
    const student = new Student({
      userId: req.user._id,
      name,
      email,
      location,
      institution,
      degree,
      fieldOfStudy,
      startYear,
      graduationYear
    });
    await student.save();
    res.status(201).send({ message: 'Student profile created successfully' });
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get Student Profile Route
router.get('/student/:id', authenticate, authorize(['Student']), async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).send({ message: 'Student profile not found' });
    }
    res.send(student);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;