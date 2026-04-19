# Dev Portfolio

A clean personal portfolio site showcasing projects and contact information. Built with React and Vite, styled with Tailwind CSS via CDN, and enhanced with subtle animations using Framer Motion patterns — all fully static for fast, reliable deployment.

## Features

- **Hero Section**: Prominent name and role display
- **About Section**: Descriptive paragraph with warm minimalism styling
- **Project Cards**: Responsive grid of 3 projects (1 column mobile → 3 column desktop)
- **Contact Form**: Simulated submission with success toast and honeypot anti-spam field
- **Animations**: Scroll-triggered slide-up effects for sections
- **Accessibility & UX**: Focus states, hover lifts, semantic HTML, and mobile-first design

## Tech Stack

- **Frontend**: React + Vite
- **Styling**: Tailwind CSS (via CDN), custom CSS variables
- **Typography**: [Fraunces](https://fonts.google.com/specimen/Fraunces) (headings), [Satoshi](https://fonts.google.com/specimen/Satoshi) (body)
- **Animations**: Inline `@keyframes` and CSS transitions (no external library bundle)
- **Deployment**: Zero-config ready for [Vercel](https://vercel.com)

## Setup Instructions

This is a static site. No backend, database, or API required.

### Local Development

```bash
# Clone the project
git clone https://github.com/your-username/app_e52a.git
cd app_e52a

# Install dependencies
npm create vite@latest . --template react-ts
npm install

# Start dev server
npm run dev
```

> ⚠️ Note: All assets and styles are already embedded in `index.html` and component files. No additional setup needed.

### Production Build

```bash
npm run build
```

Output is in `dist/` — deploy to Vercel, Netlify, or any static host.

## Usage

- **Scroll down** to view About section, Projects, and Contact form
- **Click "Send Message"** to simulate form submission (shows toast)
- **Honeypot field** is hidden from users but catches bots (client-side only)

## Folder Structure

```
app_e52a/
├── index.html               # Main HTML with Tailwind CDN + fonts + global styles
├── src/
│   ├── main.tsx             # React root render
│   ├── App.tsx              # Main App component with layout
│   └── components/
│       ├── Hero.tsx         # Hero section with name/role
│       ├── About.tsx        # About paragraph
│       ├── ProjectCard.tsx  # Reusable project card
│       ├── ContactForm.tsx  # Form with validation & toast
│       └── Toast.tsx        # Success notification
├── public/
│   └── placeholder.jpg      # Dummy image for project cards
├── db/
│   ├── schema.sql           # No tables (static site)
│   └── seed.sql             # No seed data
├── functions/
│   └── contact/             # No serverless function (simulated client-side)
└── README.md
```

## Deployment

Deploy directly to **Vercel**:

```bash
vercel --prod
```

- No environment variables
- No build steps beyond `npm run build`
- No server or database required

---

## Design System

### Color Palette

| Role         | Hex       |
|--------------|-----------|
| Background   | `#faf8f5` |
| Surface      | `#e9e5dd` |
| Text         | `#1a2e1a` |
| Dim Text     | `#4a4a4a` |
| Accent       | `#e66000` (burnt orange) |
| Accent Alt   | `#ff8c42` (highlight glow) |

### Typography

- **Headings (h1–h6)**: Fraunces, `letter-spacing: -0.05em`
- **Body**: Satoshi, `line-height: 1.6`, `max-width: 65ch`

### Interactions

- **Hover Lift**: Cards lift 4px with increased shadow
- **Focus Glow**: Inputs glow with orange outline on focus
- **Button Pulse**: Orange buttons shift to `#ff8c42` on hover
- **Animations**: Slide-up on scroll (triggered by `slide-up` class)

---

## Acceptance Criteria

✅ Page loads under 2 seconds  
✅ Contact form shows success toast  
✅ Honeypot field included (hidden input)  
✅ Responsive layout: 1 → 2 → 3 column grid  
✅ Accessible form labels and focus states  

---

## Notes

- **No backend**: All content is hardcoded; form is client-side simulated
- **No Supabase**: Not used — static site pattern
- **No Resend/Email**: No integration — simulated only
- **Performance**: Single HTML + JS bundle, fonts preloaded, no render-blocking JS
- **Security**: Honeypot field deters bots; no data collected

---

## Troubleshooting

| Issue | Solution |
|------|----------|
| Fonts not loading | Ensure internet connection; Google Fonts are external |
| Animations not triggering | Check if `slide-up` class is applied after mount |
| Toast not showing | Verify `showToast` state and `setTimeout` in `ContactForm` |
| Mobile layout broken | Confirm Tailwind classes: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` |

---

## License

MIT

---

> Built with ❤️ using Vite, React, and warm minimalism.

---