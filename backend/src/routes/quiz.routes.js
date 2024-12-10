import express from 'express';
import { createQuiz, attemptQuiz } from '../controllers/quiz.controller.js';
import { authenticate, authorize } from '../middlewares/auth.middleware.js';

const router = express.Router();

// Only authenticated users with roles 'Job Seeker' or 'Student' can create a quiz
router.post('/create', authenticate, authorize(['Job Seeker', 'Student']), createQuiz);

// Only authenticated users with roles 'Job Seeker' or 'Student' can attempt a quiz
router.post('/attempt', authenticate, authorize(['Job Seeker', 'Student']), attemptQuiz);

export default router;