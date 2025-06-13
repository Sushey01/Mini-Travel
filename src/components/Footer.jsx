import React from 'react';
import './Footer.css';

const Footer = ({ items }) => {
  if (!items || items.length === 0) {
    return (
      <p className="footer-message">Start adding some items to your packing list 🚀</p>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter(item => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <div className="footer-container">
      <h4>
        💼 You have {numItems} items, and you already packed {numPacked} ({percentage}%)
      </h4>
      {percentage === 100 && (
        <p>You got everything! Ready to go ✈️</p>
      )}
    </div>
  );
};

export default Footer;
