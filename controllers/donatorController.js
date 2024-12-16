const mongoose = require('mongoose');
const Donator = require('../models/Donator');
const bcrypt = require('bcryptjs');

// Donator Signup
exports.signupDonator = async (req, res) => {
  const { fullName, email, password, address, phoneNumber, aadharNumber } = req.body;

  if (!fullName || !email || !password || !address || !phoneNumber || !aadharNumber) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  try {
    const existingDonator = await Donator.findOne({ email });
    if (existingDonator) {
      return res.status(400).json({ message: 'Donator already exists' });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const donator = new Donator({
      fullName,
      email,
      password: hashedPassword,
      address,
      phoneNumber,
      aadharNumber,
    });
    await donator.save();
    res.status(201).json({ message: 'Donator registered successfully. Please verify OTP to complete signup.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Donator Login
exports.loginDonator = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const donator = await Donator.findOne({ email });

    if (!donator) {
      return res.status(404).json({ message: 'Donator not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, donator.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    return res.status(200).json({ 
      message: 'Login successful', 
      donatorId: donator._id 
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getDonatorProfile = async (req, res) => {
  const donatorId = req.params.id; // Get donatorId from URL

  try {
    const donator = await Donator.findById(donatorId);

    if (!donator) {
      return res.status(404).json({ message: 'Donator not found' });
    }

    return res.status(200).json({ donator });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching donator data' });
  }
};

// Update Donator
exports.updateDonator = async (req, res) => {
  const donatorId = req.params.id; // Get donator ID from route params
  const updatedData = req.body; // Get updated data from request body

  try {
    const updatedDonator = await Donator.findByIdAndUpdate(
      donatorId,
      updatedData,
      { new: true, runValidators: true } // Return updated document and validate updates
    );

    if (!updatedDonator) {
      return res.status(404).json({ message: 'Donator not found' });
    }

    res.status(200).json({ message: 'Profile updated successfully', donator: updatedDonator });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ message: 'Failed to update profile', error: error.message });
  }
};

 