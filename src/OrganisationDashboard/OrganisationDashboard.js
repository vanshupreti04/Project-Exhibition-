import React, { useState, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import ProfileSection from './ProfileSection';
import DonatedMoney from './DonatedMoney';
import ItemsAvailable from './ItemsAvailable';
import Messages from './Messages';
import EditOrganisationDetails from './EditOrganisationDetails';
import './OrganisationDashboard.css';

const OrganisationDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [organisation, setOrganisation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);

  const sectionMap = {
    '/organisation-dashboard/profile': 'profile',
    '/organisation-dashboard/money': 'money',
    '/organisation-dashboard/items': 'items',
    '/organisation-dashboard/messages': 'messages',
    '/organisation-dashboard/edit': 'edit',
  };

  const activeSection = sectionMap[location.pathname] || 'profile';

  const taglines = useMemo(
    () => [
      'Empowering Organisations for a Better Tomorrow',
      'Your Mission, Our Commitment',
      'Building Trust Through Transparency',
      'Together, We Make a Difference',
      'Impact Beyond Boundaries',
      'Compassion Drives Us Forward',
      'Every Effort Matters',
      'Serving Communities Together',
      'Trust and Action in Harmony',
      'Leadership in Giving Back',
    ],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTaglineIndex((prevIndex) => (prevIndex + 1) % taglines.length);
    }, 10000); // Rotate taglines every 10 seconds

    return () => clearInterval(interval);
  }, [taglines.length]);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  useEffect(() => {
    const fetchOrganisationData = async () => {
      const organisationId = localStorage.getItem('organisationId'); // Retrieve organisation ID
      if (!organisationId) {
        console.error('Organisation ID not found');
        return;
      }
    
      try {
        const response = await fetch(`http://localhost:5000/api/organisation/profile/${organisationId}`);
        if (response.ok) {
          const data = await response.json();
          setOrganisation(data.organisation); // Set organisation details
        } else {
          console.error('Failed to fetch organisation data');
        }
      } catch (error) {
        console.error('Error fetching organisation data:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchOrganisationData();
  }, []);
  
  if (loading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  return (
    <div className="organisation-dashboard">
      {/* Top Menu Bar */}
      <div className="top-menu">
        <button className="menu-button" onClick={toggleSidebar}>
          ☰
        </button>
        <div className="tagline fade-animation">{taglines[currentTaglineIndex]}</div>
        <div className="profile-picture">
          <img src={organisation?.profilePicture || '/default-avatar.png'} alt="Organisation" />
        </div>
      </div>

      {/* Sidebar */}
      {showSidebar && (
        <Sidebar
          navigate={navigate}
          options={[
            { label: 'Profile', route: '/organisation-dashboard/profile' },
            { label: 'Donated Money', route: '/organisation-dashboard/money' },
            { label: 'Items Available', route: '/organisation-dashboard/items' },
            { label: 'Messages', route: '/organisation-dashboard/messages' },
            { label: 'Edit Details', route: '/organisation-dashboard/edit' },
          ]}
        />
      )}

      {/* Content Section */}
      <div className="content-container">
        {activeSection === 'profile' && <ProfileSection organisation={organisation} />}
        {activeSection === 'money' && <DonatedMoney />}
        {activeSection === 'items' && <ItemsAvailable />}
        {activeSection === 'messages' && <Messages />}
        {activeSection === 'edit' && <EditOrganisationDetails organisation={organisation} />}
      </div>
    </div>
  );
};

export default OrganisationDashboard;
