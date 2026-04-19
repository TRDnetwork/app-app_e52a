# Test Suite for Dev Portfolio

## How to Run
```bash
npm install vitest jsdom @testing-library/react @testing-library/jest-dom
npm test
```

## Test Coverage

### `app.test.js`
- Verifies hero section renders name and role
- Confirms about section contains descriptive text
- Checks that 3 project cards are rendered
- Tests contact form submission shows success toast
- Validates honeypot field exists and is hidden

### `api.test.js`
- Confirms no real API endpoints exist (static site)
- Tests that form submission is client-side only (no fetch calls)
- Validates form input requirements and error states

Note: All tests assume a static site with no backend. Supabase and external APIs are not used.