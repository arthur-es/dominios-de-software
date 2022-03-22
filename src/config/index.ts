export const supabaseUrl = "https://rjhqhsvkrgkqziqndflb.supabase.co";

if (!process.env.SUPABASE_KEY) {
  throw new Error("Check you SUPABASE_KEY env");
}
export const supabaseKey = process.env.SUPABASE_KEY;
