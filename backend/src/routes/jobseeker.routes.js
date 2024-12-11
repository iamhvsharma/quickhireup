import express from 'express';
import { authenticate, authorize } from '../middlewares/auth.middleware.js';
import upload from '../middlewares/upload.js';
import JobSeeker from '../models/jobSeeker.model.js';
import nodemailer from 'nodemailer';

const router = express.Router();

// Create Job Seeker Profile Route - using multer middleware for file upload
router.post('/jobseeker', upload.single('resume'), async (req, res) => {
  try {
    // Parse the stringified JSON back to objects
    const jobPreferences = JSON.parse(req.body.jobPreferences);
    const culturalPreferences = JSON.parse(req.body.culturalPreferences);

    // Create new job seeker profile
    const jobSeeker = new JobSeeker({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      title: req.body.title,
      bio: req.body.bio,
      email: req.body.email,
      jobPreferences,
      culturalPreferences,
      resume: req.file ? {
        url: req.file.path,
        fileName: req.file.originalname
      } : null,
      onboardingCompleted: true,
      onboardingStep: 'profile_completed'
    });

    // Save to database
    await jobSeeker.save();

    res.status(201).json({
      success: true,
      message: 'Profile created successfully',
      data: jobSeeker,
      redirectTo: '/onboarding'
    });

  } catch (error) {
    console.error('Error creating profile:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating profile',
      error: error.message
    });
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

// Create/Update Basic Info
router.post('/profile/basic', authenticate, async (req, res) => {
  try {
    const { firstName, lastName, title, bio } = req.body;
    
    let jobSeeker = await JobSeeker.findOneAndUpdate(
      { _id: req.user.id },
      { firstName, lastName, title, bio },
      { new: true, upsert: true }
    );

    res.json(jobSeeker);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Job Preferences
router.post('/profile/preferences', authenticate, async (req, res) => {
  try {
    const { jobType, location, salary, remote } = req.body;
    
    const jobSeeker = await JobSeeker.findOneAndUpdate(
      { _id: req.user.id },
      { jobPreferences: { jobType, location, salary, remote } },
      { new: true }
    );

    res.json(jobSeeker);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Cultural Preferences
router.post('/profile/culture', authenticate, async (req, res) => {
  try {
    const { workStyle, teamSize, companySize, industry } = req.body;
    
    const jobSeeker = await JobSeeker.findOneAndUpdate(
      { _id: req.user.id },
      { culturalPreferences: { workStyle, teamSize, companySize, industry } },
      { new: true }
    );

    res.json(jobSeeker);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Upload Resume
router.post('/profile/resume', authenticate, upload.single('resume'), async (req, res) => {
  try {
    const jobSeeker = await JobSeeker.findOneAndUpdate(
      { _id: req.user.id },
      { 
        resume: {
          url: req.file.path,
          fileName: req.file.originalname
        }
      },
      { new: true }
    );

    res.json(jobSeeker);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Verify Email
router.post('/profile/verify-email', authenticate, async (req, res) => {
  try {
    const { verificationCode } = req.body;
    
    const jobSeeker = await JobSeeker.findOne({ _id: req.user.id });
    
    if (jobSeeker.verificationCode !== verificationCode) {
      return res.status(400).json({ message: 'Invalid verification code' });
    }

    jobSeeker.isEmailVerified = true;
    jobSeeker.verificationCode = undefined;
    await jobSeeker.save();

    res.json({ message: 'Email verified successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add these routes
router.post('/jobseeker/send-verification', async (req, res) => {
  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email is required' 
      });
    }
    
    console.log('Attempting to send verification to:', email);
    console.log('Using email configuration:', {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS ? '****' : 'not set'
    });
    
    // Generate 6 digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000);
    console.log('Generated OTP:', otp);
    
    // Store OTP in session/cache/database
    global.otpStore = global.otpStore || {};
    global.otpStore[email] = {
      otp,
      timestamp: Date.now()
    };

    console.log('Creating nodemailer transporter...');
    // Create nodemailer transporter with more detailed configuration
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      debug: true // Enable debug logging
    });

    // Verify the transporter configuration
    try {
      await transporter.verify();
      console.log('Transporter verification successful');
    } catch (verifyError) {
      console.error('Transporter verification failed:', verifyError);
      throw new Error('Email configuration error: ' + verifyError.message);
    }

    console.log('Setting up mail options...');
    // Email options
    const mailOptions = {
      from: `"QuickHireUp" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Email Verification OTP',
      html: `
        <h1>Email Verification</h1>
        <p>Your verification code is: <strong>${otp}</strong></p>
        <p>This code will expire in 10 minutes.</p>
      `
    };

    console.log('Attempting to send email...');
    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');

    res.json({ success: true, message: 'Verification code sent successfully' });
  } catch (error) {
    console.error('Detailed error in send-verification:', {
      message: error.message,
      stack: error.stack,
      code: error.code,
      command: error.command,
      response: error.response
    });
    
    let errorMessage = 'Error sending verification code';
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please check email credentials.';
    } else if (error.code === 'ESOCKET') {
      errorMessage = 'Network error while sending email.';
    }
    
    res.status(500).json({ 
      success: false, 
      message: errorMessage,
      error: error.message 
    });
  }
});

router.post('/jobseeker/verify-otp', (req, res) => {
  try {
    const { email, otp } = req.body;
    
    // Get stored OTP
    const storedData = global.otpStore[email];
    
    if (!storedData) {
      return res.status(400).json({ 
        success: false, 
        message: 'No verification code found. Please request a new one.' 
      });
    }

    // Check if OTP is expired (10 minutes)
    if (Date.now() - storedData.timestamp > 10 * 60 * 1000) {
      delete global.otpStore[email];
      return res.status(400).json({ 
        success: false, 
        message: 'Verification code expired. Please request a new one.' 
      });
    }

    // Verify OTP
    if (parseInt(otp) === storedData.otp) {
      delete global.otpStore[email]; // Clear OTP after successful verification
      return res.json({ 
        success: true, 
        message: 'Email verified successfully' 
      });
    }

    res.status(400).json({ 
      success: false, 
      message: 'Invalid verification code' 
    });
  } catch (error) {
    console.error('Error verifying OTP:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error verifying code' 
    });
  }
});

export default router;





