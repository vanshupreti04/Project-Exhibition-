const express = require('express');
const { signupOrganisation, loginOrganisation, getOrganisationProfile, updateOrganisation, getAllOrganisations } = require('../controllers/organisationController');
const router = express.Router();

router.post('/signup_organisation', signupOrganisation);

router.post('/login', loginOrganisation);

// Route to get organisation profile by ID
router.get('/profile/:id', getOrganisationProfile);

router.put('/update/:id', updateOrganisation);

// Route to get all organisations
router.get('/all', getAllOrganisations);


module.exports = router;
