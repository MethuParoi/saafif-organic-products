import { createClient } from "@supabase/supabase-js";
// Load environment variables

const supabaseKey = import.meta.env.VITE_APP_SUPABASE_ANON_KEY;
const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
