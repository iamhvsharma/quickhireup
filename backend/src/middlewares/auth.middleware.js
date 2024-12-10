import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

// Middleware to authenticate the user using JWT
export const authenticate = async (req, res, next) => {
  try {
    // Extract token from Authorization header
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      console.warn('No token provided'); // Debug log
      return res.status(401).send({ message: 'Access Denied: No Token' });
    }

    // Verify and decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded || !decoded.userId) {
      console.error('Invalid token payload:', decoded); // Debug log
      return res.status(400).send({ message: 'Invalid Token' });
    }
    console.log('Decoded JWT payload:', decoded); // Debug log

    // Find the user associated with the token
    const user = await User.findById(decoded.userId);
    if (!user) {
      console.error('User not found for ID:', decoded.userId); // Debug log
      return res.status(404).send({ message: 'User not found' });
    }
    console.log('Authenticated User:', user); // Debug log

    // Attach user data to the request object
    req.user = { _id: user._id, userId: user._id, role: user.role }; // Add userId for consistency

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error('Error in authentication middleware:', error); // Debug log
    if (error.name === 'JsonWebTokenError') {
      return res.status(400).send({ message: 'Invalid Token' });
    }
    if (error.name === 'TokenExpiredError') {
      return res.status(401).send({ message: 'Token Expired' });
    }
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

// Middleware to authorize based on roles
export const authorize = (roles) => {
  return (req, res, next) => {
    try {
      // Ensure the user's role is included in the allowed roles
      if (!roles.includes(req.user.role)) {
        console.warn('Unauthorized role:', req.user.role); // Debug log
        return res.status(403).send({ message: 'Access Denied: Unauthorized Role' });
      }
      console.log('Authorized Role:', req.user.role); // Debug log
      next(); // Proceed to the next middleware or route handler
    } catch (error) {
      console.error('Error in authorization middleware:', error); // Debug log
      res.status(500).send({ message: 'Internal Server Error' });
    }
  };
};
