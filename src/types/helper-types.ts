// https://supabase.com/docs/reference/javascript/typescript-support#helper-types
import type { Database } from './supabase';
export type Tables<T extends keyof Database['public']['Tables']> =
	Database['public']['Tables'][T]['Row'];
