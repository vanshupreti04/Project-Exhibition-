const express = require('express');
const { signupDonator, loginDonator, getDonatorProfile, updateDonator } = require('../controllers/donatorController');
const router = express.Router();

// Route for Donator Signup
router.post('/signup_donor', signupDonator);

// Route for Donator Login
router.post('/login', loginDonator);

// Route to get Donator profile by ID
router.get('/profile/:id', getDonatorProfile);

// Route to update donator profile
router.put('/update/:id', updateDonator);


module.exports = router;
