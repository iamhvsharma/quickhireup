import mongoose, { Schema } from "mongoose";

const companySchema = new Schema({
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    companyName: {
      type: String,
      required: true,
      trim: true,
    },
    logoUrl: {
      type: String,
      required: true,
    },
    workEmail: {
      type: String,
      required: true,
      match: /^\S+@\S+\.\S+$/,
    },
    website: {
      type: String,
      match: /^https?:\/\/\S+$/,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    markets: [{
      type: String,
      maxlength: 50,
      required: true,
    }],
    numberOfEmployees: {
      type: String,
      enum: ['1-10', '11-50', '51-200', '201-500', '500+'],
      required: true,
    },
    oneLinepitch: {
      type: String,
      maxlength: 300,
    },
    profilePicture:{
      type: String,
    }, 
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phoneNo:{
      type: String,
      required: true,
      trim: true,
    }, 
    role:{
      type: String,
      required: true,
      trim: true,
      enum: ['CEO', 'CTO', 'HR-MANAGER', 'OTHER'],
    }
  }, { timestamps: true });
  
  companySchema.index({ companyName: 1, workEmail: 1 }); // Prevent duplicates
  
  const Company = mongoose.model('Company', companySchema);
  
  export default Company;