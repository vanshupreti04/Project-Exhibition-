import React from 'react';
import './ItemsAvailable.css'; // Import the CSS file

const ItemsAvailable = () => {
  return (
    <div className="items-available">
      <h1 className="items-title">Items Available</h1>
      <p className="items-description">
        Discover items available for donation and make a difference.
      </p>
      <button className="items-button">See Items</button>
    </div>
  );
};

export default ItemsAvailable;
