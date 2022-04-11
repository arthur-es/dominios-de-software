// Make sure the process doest not continue without essential ENVs
if (!process.env.SUPABASE_KEY) {
  throw new Error("Check you SUPABASE_KEY env");
}

if (!process.env.SACFLOW_ENDPOINT) {
  throw new Error("Check you SACFLOW_ENDPOINT env");
}

if (!process.env.SACFLOW_TOKEN) {
  throw new Error("Check you SACFLOW_TOKEN env");
}
export const supabaseUrl = "https://rjhqhsvkrgkqziqndflb.supabase.co";
export const supabaseKey = process.env.SUPABASE_KEY;

export const sacflowEndpoint = process.env.SACFLOW_ENDPOINT;
export const sacflowToken = process.env.SACFLOW_TOKEN;
