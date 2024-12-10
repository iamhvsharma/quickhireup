import mongoose, { Schema } from 'mongoose';

const mentorshipListingSchema = new Schema({
  mentor: { type: Schema.Types.ObjectId, ref: 'Mentor', required: true, unique: true }, // Reference to Mentor
  title: { type: String, required: true },
  description: { type: String, required: true },
  skillTags: [{ type: String, required: true }], // Example: ['JavaScript', 'React']
  sessionDetails: {
    duration: { type: Number, required: true }, // Duration in hours
    numberOfSessions: { type: Number, required: true },
    pricing: { type: Number, required: true }, // Price per session or package
    mode: { type: String, enum: ['Online', 'Offline'], required: true },
    maxParticipants: { type: Number, default: 1 },
  },
  additionalInfo: {
    requirements: { type: String }, // Mentee prerequisites
    refundPolicy: { type: String },
  },
  reviews: [{
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, maxlength: 500 },
    createdAt: { type: Date, default: Date.now }
  }],
  averageRating: { type: Number, default: 0 },
}, { timestamps: true });

const MentorshipListing = mongoose.model('MentorshipListing', mentorshipListingSchema);

export default MentorshipListing;