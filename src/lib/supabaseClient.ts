import { Database } from '@/types/database.types';
import { createClient } from '@supabase/supabase-js';

const projectUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const secretKey = process.env.SUPABASE_SECRET_KEY!;

export const supabase = createClient<Database>(projectUrl, anonKey, {
	auth: { persistSession: false },
});
export const supabaseBackend = createClient<Database>(projectUrl, secretKey, {
	auth: { persistSession: false },
});
