import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ofxinmglsqsbyzsiofcy.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9meGlubWdsc3FzYnl6c2lvZmN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5NTQxNzQsImV4cCI6MjA2NzUzMDE3NH0.fS0Fo3Ic1KWT382ocajAaBw00Y3Pdl5ofZc8ats0Hdw'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
