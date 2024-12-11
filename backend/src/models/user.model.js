import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true, // Indexed for faster lookups
    match: /^\S+@\S+\.\S+$/,
  },
  password: {
    type: String,
    required: function () {
      return !this.googleId;
    }, // Not required for Google login
    minlength: 8,
    // select: false // Prevent password from being sent in queries
  },
  role: {
    type: String,
    enum: ['jobseeker', 'company', 'mentor', 'student'], 
    required: true,
  },
}, { timestamps: true });

// Hash passwords before saving
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Password validation method
userSchema.methods.isValidPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};



userSchema.methods.generateRefreshToken = function () {
  return jwt.sign({
    _id: this._id,
  }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: process.env.REFERESH_TOKEN_EXPIRY, 
  });
}

const User = mongoose.model('User', userSchema);

export default User;