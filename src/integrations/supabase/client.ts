// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://uaoicecuoojhaerumawv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhb2ljZWN1b29qaGFlcnVtYXd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk3Mzc0ODAsImV4cCI6MjA1NTMxMzQ4MH0.hW8FUgeSwnY-p3_GML2yQsLSWnhyjLEURCWZ2CUJ8vc";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);