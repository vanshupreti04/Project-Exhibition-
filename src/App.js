import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import AboutUs from './components/AboutUs';
import SignupOrganisation from './SignupOrganisation/SignupOrganisation';
import SignupDonator from './SignupDonator/SignupDonator';
import QuoteSlider from './components/QuoteSlider';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import DonatorDashboard from './DonatorDashboard/DonatorDashboard'; // Import the DonatorDashboard component
import OrganisationDashboard from './OrganisationDashboard/OrganisationDashboard';
import LoginDonator from './components/LoginDonator';
import LoginOrganisation from './components/LoginOrganisation'; // Adjust the path based on your project structure
import ViewOrganisation from './components/ViewOrganisation'; // New page for "View Organisation"
import ItemsAvailable from './components/ItemsAvailable'; // New page for "Items Available"
import StartTracking from './components/StartTracking'; // New page for "Start Tracking"
import EventsPage from './DonatorDashboard/EventsPage';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home Route */}
          <Route 
            path="/" 
            element={
              <>
                <Navbar />
                <QuoteSlider />
                <Features />
                <Testimonials />
                <Footer />
              </>
            } 
          />
          {/* Other Routes */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup_organisation" element={<SignupOrganisation />} />
          <Route path="/signup_donor" element={<SignupDonator />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/donator-dashboard/*" element={<DonatorDashboard />} />
          <Route path="/organisation-dashboard/*" element={<OrganisationDashboard />} /> {/* Organisation Dashboard Route */}
          <Route path="/login_donator" element={<LoginDonator />} />
          <Route path="/login_organisation" element={<LoginOrganisation />} />
          <Route path="/view-organisation" element={<ViewOrganisation />} />
          <Route path="/items-available" element={<ItemsAvailable />} />
          <Route path="/start-tracking" element={<StartTracking />} />
          <Route path="/events" element={<EventsPage />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
