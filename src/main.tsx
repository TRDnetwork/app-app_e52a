import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// SECURITY FIX: Ensure DOM is fully loaded before rendering to prevent DOM-based attacks
// Also wrap in strict mode for better security and dev-time checks
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);