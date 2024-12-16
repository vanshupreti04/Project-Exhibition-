// ItemsAvailable.js
import React from 'react';
import './ItemsAvailable.css';

const ItemsAvailable = () => {
  return (
    <div className="items-available">
      <h2>Items Available for Donation</h2>
      <p>Below are the items available for donation.</p>
      {/* You can dynamically populate this from an API */}
      <div className="item-record">
        <p><strong>Item:</strong> Clothing</p>
        <p><strong>Quantity:</strong> 100</p>
        <p><strong>Location:</strong> New York</p>
      </div>
      <div className="item-record">
        <p><strong>Item:</strong> Books</p>
        <p><strong>Quantity:</strong> 50</p>
        <p><strong>Location:</strong> California</p>
      </div>
    </div>
  );
};

export default ItemsAvailable;
