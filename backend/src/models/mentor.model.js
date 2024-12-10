import mongoose, { Schema } from 'mongoose';

const mentorSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true }, // Reference to the User
  avatar: { type: String }, // URL to profile picture
  contactNumber: { type: String, required: true }, // Contact number
  expertise: [{ type: String, required: true }], // List of skills
  bio: { type: String, required: true, maxlength: 1000 }, // Detailed bio
  experience: { type: Number, required: true }, // Experience in years
  certifications: [{ 
    name: { type: String, required: true }, 
    url: { type: String } 
  }], // List of certifications
  socialLinks: {
    linkedIn: { type: String },
    github: { type: String },
    personalWebsite: { type: String },
  },
  availability: {
    timeSlots: [{ 
      day: { type: String, required: true }, 
      time: { type: String, required: true } 
    }], // Example: [{ day: 'Monday', time: '10:00 AM - 11:00 AM' }]
    preferredChannel: { type: String, enum: ['Zoom', 'Google Meet', 'Other'], required: true },
  },
  averageRating: { type: Number, default: 0 },
  reviews: [{
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, maxlength: 500 },
    createdAt: { type: Date, default: Date.now }
  }],
  sessions: [{
    mentee: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, required: true },
    duration: { type: Number, required: true }, // Duration in minutes
    feedback: { type: String, maxlength: 500 }
  }]
}, { timestamps: true });

const Mentor = mongoose.model('Mentor', mentorSchema);

export default Mentor;