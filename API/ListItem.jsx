import React from 'react';
import { FaHeart, FaStar } from 'react-icons/fa'; // Using react-icons for a custom touch

// Component #1
function ListItem({ text, important }) {
  // Conditional styling based on the 'important' prop
  const itemStyle = {
    backgroundColor: important ? '#fff3cd' : '#e9ecef', // Light yellow for important
    borderLeft: important ? '5px solid #ffc107' : '5px solid #6c757d',
    color: important ? '#856404' : '#212529',
    padding: '10px',
    marginBottom: '8px',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.1rem',
  };

  return (
    <li style={itemStyle}>
      {/* Conditionally display an icon for important items */}
      {important ? <FaStar style={{ marginRight: '10px', color: '#ffc107' }} /> : <FaHeart style={{ marginRight: '10px', color: '#6c757d' }} />}
      {text}
    </li>
  );
}

export default ListItem;