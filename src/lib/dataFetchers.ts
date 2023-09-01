import { supabase } from './supabaseClient';

// Non Form Actions (e.g. get data)
export async function getWorkingEntries() {
	// Todo: Authenticated User
	const { data: entries } = await supabase.from('WorkingEntries').select(
		`
	id,
	begin,
	end,
	sick_leave,
	job_id,
	user_id,
	Jobs (
		id,
		title,
		simple_wage
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
