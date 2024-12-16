import React from 'react';
import './DonationHistory.css';

const DonationHistory = ({ history }) => {
  return (
    <div className="history-section">
      <h2>Donation History</h2>
      {history.length > 0 ? (
        <ul>
          {history.map((donation, index) => (
            <li key={index}>
              <p><strong>Amount:</strong> {donation.amount}</p>
              <p><strong>Organization:</strong> {donation.organization}</p>
              <p><strong>Date:</strong> {new Date(donation.date).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No donations made yet.</p>
      )}
    </div>
  );
};

export default DonationHistory;
