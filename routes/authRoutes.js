const express = require('express');
const { generateOtp, verifyOtp } = require('../controllers/authController'); // OTP logic
const router = express.Router();

// General OTP routes
router.post('/generate-otp', generateOtp);  // Generate OTP for general users (or Donators/Organisations)
router.post('/verify-otp', verifyOtp);     // Verify OTP for general users (or Donators/Organisations)

module.exports = router;
