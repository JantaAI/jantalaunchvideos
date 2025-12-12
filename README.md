# Janta Launch Studio - React Landing Page

A pixel-perfect React recreation of the Janta launch video production studio landing page.

## Features

- **Dark Theme Design** - Minimalist black background with white text
- **Responsive Layout** - Works on desktop and mobile devices
- **Multiple Pages**:
  - Home page with hero section
  - Work page with video player
  - Pricing page
  - Contact/Booking page with form
  - Gear page with equipment listings

## Tech Stack

- React 18
- React Router DOM for navigation
- Vite for build tooling
- CSS for styling

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── VideoPlayer.jsx
│   └── BookingForm.jsx
├── pages/           # Page components
│   ├── Home.jsx
│   ├── Work.jsx
│   ├── Pricing.jsx
│   ├── Contact.jsx
│   └── Gear.jsx
├── styles/          # Global styles
│   ├── index.css
│   └── App.css
├── App.jsx          # Main app component with routing
└── main.jsx         # Entry point
```

## Notes

- The video player component is set up but requires an actual video source file
- Form submission handling needs to be connected to your backend/API
- All styling matches the original design with dark theme and minimalist aesthetic

