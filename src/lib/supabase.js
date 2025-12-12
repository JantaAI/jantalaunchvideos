import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://vbwjphgprgdeeyesuqei.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZid2pwaGdwcmdkZWV5ZXN1cWVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU1MDMwMTcsImV4cCI6MjA4MTA3OTAxN30.7GabtBF3iyFxkeu0aq2MZM12g99rBVU9bG1ViBVvh2I'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

