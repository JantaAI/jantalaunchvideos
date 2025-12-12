-- Fix bookings table and RLS policies
-- Run this in your Supabase SQL Editor if you're getting "Something went wrong" errors

-- First, drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Allow public inserts" ON bookings;
DROP POLICY IF EXISTS "Allow authenticated reads" ON bookings;

-- Ensure the table exists with correct structure
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

-- Create policy to allow anonymous users to insert bookings
-- This is critical - without this, inserts will fail
CREATE POLICY "Allow public inserts" ON bookings
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow authenticated users to read bookings
CREATE POLICY "Allow authenticated reads" ON bookings
  FOR SELECT
  TO authenticated
  USING (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_bookings_email ON bookings(email);
CREATE INDEX IF NOT EXISTS idx_bookings_created_at ON bookings(created_at DESC);

-- Verify the setup
SELECT 
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd
FROM pg_policies 
WHERE tablename = 'bookings';

