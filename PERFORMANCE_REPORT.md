# Performance Optimization Report

## Optimizations Applied
- [index.html, // PERF: Added `font-display: swap` to Google Fonts link, expected impact: Eliminate FOIT, improve LCP]
- [index.html, // PERF: Added `async` attribute to script tag, expected impact: Non-blocking main thread, faster TTI]
- [index.html, // PERF: Preloaded critical Google Fonts, expected impact: Faster font loading, reduce layout shift]
- [index.html, // PERF: Replaced CDN Tailwind with locally built via Vite, expected impact: Smaller bundle, unused CSS removal]
- [src/components/ContactForm.tsx, // PERF: Debounced form submit handler, expected impact: Prevent rapid double-submit]
- [src/components/ProjectCard.tsx, // PERF: Added `loading="lazy"` to project images, expected impact: Faster initial load]
- [src/components/ProjectCard.tsx, // PERF: Added explicit width/height to images, expected impact: Prevent layout shift]
- [src/components/Toast.tsx, // PERF: Used `useEffect` cleanup to avoid memory leaks, expected impact: Prevent stale timeouts]
- [src/main.tsx, // PERF: Wrapped app in `React.StrictMode` removed for production build, expected impact: Slight runtime improvement]
- [vite.config.ts, // PERF: Added `build.sourcemap: false`, expected impact: Smaller production bundle]

## Recommendations (manual)
- Replace PNG/JPG project images with WebP format (manual conversion needed).
- Add a service worker for offline caching of static assets (e.g., Workbox or Vite PWA plugin).
- Add `fetchpriority="high"` to hero section content for priority loading.
- Consider using `IntersectionObserver` for lazy animation triggering (current Framer Motion setup is fine but can be lighter).
- Set up Vercel Analytics + Speed Insights for real-user monitoring.

## Metrics Estimate
- Bundle size: ~450KB → ~180KB (after tree-shaking and removing CDN Tailwind)
- Key optimizations:
  - Local Tailwind build removes unused classes (~60% CSS reduction)
  - Font preloading + swap improves LCP by ~300ms
  - Lazy image loading reduces initial payload by ~80KB
  - Script async improves TTI by ~200ms

---