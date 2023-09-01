import { supabase } from './supabaseClient';

// Non Form Actions (e.g. get data)
export async function getWorkingEntries() {
	const { data: entries } = await supabase.from('WorkingEntries').select(
		`
	id,
	begin,
	end,
	job_id,
	Jobs (
		id,
		title
	)
	`
	);

	return entries;
}

export async function getJobs() {
	const { data: userJobs } = await supabase
		.from('Jobs')
		.select('*')
		// Todo: Authenticated User
		.eq('user_id', 1);

	return userJobs;
}
