import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // If you have global styles, you can include them here
import App from './App'; // Import the main App component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
