# Testing Guide

## How to Run Tests
```bash
npm install vitest jsdom @testing-library/react @testing-library/jest-dom
npm test
```

## Test Files Overview
- `app.test.js`: Tests the main App component, including:
  - Hero section content
  - About section rendering
  - Project card display and count
  - Contact form functionality and validation
  - Toast notification on submission

- `api.test.js`: Tests Supabase API integration, including:
  - Form submission data handling
  - Error handling for failed requests
  - Project data fetching
  - Proper query construction

All tests use Jest and Testing Library with jsdom for browser environment simulation. The contact form tests verify both successful submissions and validation error states.