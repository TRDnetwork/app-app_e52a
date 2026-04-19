import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// SECURITY NOTE: This is a static site with no external data fetching or user input submission.
// All content is hardcoded and rendered client-side.

---