import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  round: { type: Number, required: true },
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswer: { type: String, required: true },
});

const quizSchema = new mongoose.Schema({
  jobDescription: { type: String, required: true },
  questions: [questionSchema],
  userId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;
