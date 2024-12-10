import axios from 'axios';
import Quiz from '../models/quiz.model.js';
import JobListing from '../models/jobListing.model.js';

const generateQuestions = async (jobDescription, round) => {
  try {
    const response = await axios.post('https://api.example.com/generate', { // Replace with the correct URL
      prompt: `Generate 20 ${round} questions for a job described as: ${jobDescription}`,
      apiKey: process.env.GEMINI_API_KEY,
    });

    return response.data.questions.map((q) => ({
      question: q.text,
      options: q.options,
      correctAnswer: q.correctAnswer,
    }));
  } catch (error) {
    console.error('Error generating questions:', error.message);
    throw new Error('Failed to generate questions.');
  }
};

export const createQuiz = async (req, res) => {
  const { jobId } = req.body;
  if (!jobId) {
    return res.status(400).json({ message: 'Job ID is required.' });
  }

  try {
    const jobListing = await JobListing.findById(jobId);
    if (!jobListing) {
      return res.status(404).json({ message: 'Job listing not found.' });
    }

    const quizData = {
      jobDescription: jobListing.description,
      userId: req.user.userId,
      questions: [],
    };

    // Generate questions for all rounds
    const rounds = ['aptitude', 'DSA', 'technical'];
    for (let i = 0; i < rounds.length; i++) {
      const questions = await generateQuestions(jobListing.description, rounds[i]);
      quizData.questions.push(...questions.map((q) => ({ ...q, round: i + 1 })));
    }

    const quiz = await Quiz.create(quizData);
    res.status(201).json({ message: 'Quiz created successfully.', quiz });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const attemptQuiz = async (req, res) => {
  try {
    const { quizId, answers } = req.body;
    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
      return res.status(404).send({ message: 'Quiz not found' });
    }
    // Logic to evaluate the quiz answers
    // For simplicity, let's assume we just return the answers
    res.status(200).send({ message: 'Quiz attempted successfully', answers });
  } catch (error) {
    res.status(400).send({ message: 'Quiz attempt failed', error });
  }
};