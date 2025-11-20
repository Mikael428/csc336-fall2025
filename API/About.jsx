import React from 'react';

function About() {
  return (
    <div className="about-container">
      <h2>ℹ️ About This Application</h2>
      <p>This application was built as a demonstration of **React basics** and **React Router** integration.</p>
      
      <h3>Key Features:</h3>
      <ul>
        <li>**State Management:** The "Favorite Cities List" on the home page uses `useState` to manage and update a list of items dynamically.</li>
        <li>**Custom Components & Props:** It uses two custom components (`ListItem` and `Header`) which receive `props` to influence their appearance and content.</li>
        <li>**API Integration:** The "Random Quotes" page uses the `useEffect` hook to fetch data from the **Quotable API** upon component mount.</li>
        <li>**Routing:** **React Router** is used to navigate between the Home, About, and API pages.</li>
      </ul>
      
      <p className="about-footer">Built for CSC336 - Fall 2025.</p>
    </div>
  );
}

export default About;