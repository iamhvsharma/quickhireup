// company.routes.js
import express from "express";
import { authenticate, authorize } from "../middlewares/auth.middleware.js";
import Company from "../models/company.model.js";

const router = express.Router();

// Create Company Profile Route
router.post("/company", authenticate, authorize(["Company"]), async (req, res) => {
  try {
    // Check if a company profile already exists for this user
    const existingCompany = await Company.findOne({ userId: req.user._id });
    if (existingCompany) {
      return res
        .status(400)
        .send({ message: "Company profile already exists for this user" });
    }

    // Create a new company profile
    const company = new Company({ ...req.body, userId: req.user._id });
    await company.save();
    res.status(201).send({ message: "Company profile created successfully" });
  } catch (error) {
    res.status(400).send(error);
  }
});


// Get Company Profile Route
router.get("/company/:id", authenticate, authorize(["Company"]), async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);

    if (!company) {
      return res.status(404).send({ message: "Company not found" });
    }

    // Ensure the logged-in user is the owner of this company profile
    if (!company.userId.equals(req.user._id)) {
      return res.status(403).send({ message: "Access denied: Unauthorized user" });
    }

    res.send(company);
  } catch (error) {
    res.status(400).send(error);
  }
});


export default router;
