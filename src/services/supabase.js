// import { createClient } from "@supabase/supabase-js";
// // Load environment variables
// // import dotenv from "dotenv";
// // dotenv.config();

// // const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_URL || "";
// const SUPABASE_KEY =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNub3l1aHVtenhtcmJkemVhY3JjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk4Mzg0NzksImV4cCI6MjAzNTQxNDQ3OX0.koHX73Dj_D8N5Z11iF-TUw6okVTZ0jGbMrppAECXfTY";
// const supabaseUrl = "https://snoyuhumzxmrbdzeacrc.supabase.co";
// const supabaseKey = SUPABASE_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

// export default { supabase, supabaseUrl };

import { createClient } from "@supabase/supabase-js";

const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNub3l1aHVtenhtcmJkemVhY3JjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk4Mzg0NzksImV4cCI6MjAzNTQxNDQ3OX0.koHX73Dj_D8N5Z11iF-TUw6okVTZ0jGbMrppAECXfTY";
const supabaseUrl = "https://snoyuhumzxmrbdzeacrc.supabase.co";
const supabase = createClient(supabaseUrl, SUPABASE_KEY);

export default supabase;
