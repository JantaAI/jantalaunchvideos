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

