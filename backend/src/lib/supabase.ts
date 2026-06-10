import { createClient } from "@supabase/supabase-js";

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !key) {
  console.warn("[supabase] SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY not set — DB features disabled.");
}

export const supabase = url && key ? createClient(url, key) : null;

export type Inquiry = {
  id: string;
  created_at: string;
  name: string;
  phone: string;
  email: string;
  event_type: string;
  event_date: string;
  guests: string;
  location: string;
  message: string;
  status: "new" | "read" | "replied";
};
