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

## Supabase Setup

The booking form is connected to Supabase for storing form submissions.

### 1. Create Environment File

Create a `.env` file in the root directory with your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 2. Create Database Table

Run the migration SQL in your Supabase SQL Editor:

```sql
-- Create bookings table for storing form submissions
CREATE TABLE IF NOT EXISTS bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  domain TEXT,
  product_name TEXT,
  launch_timeline TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert bookings
CREATE POLICY "Allow public inserts" ON bookings
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow authenticated users to read bookings
CREATE POLICY "Allow authenticated reads" ON bookings
  FOR SELECT
  TO authenticated
  USING (true);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_bookings_email ON bookings(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_bookings_created_at ON bookings(created_at DESC);
```

The SQL file is also available at: `supabase/migrations/20250111_create_bookings_table.sql`

### 3. Get Your Supabase Credentials

1. Go to your Supabase project dashboard
2. Navigate to Settings > API
3. Copy your Project URL and anon/public key
4. Add them to your `.env` file

## Notes

- The video player component is set up and uses the video files in `/public`
- Form submissions are stored in Supabase `bookings` table
- All styling matches the original design with dark theme and minimalist aesthetic

