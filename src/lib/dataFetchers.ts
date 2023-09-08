import { supabase } from './supabaseClient';

export async function getWorkingEntries() {
	// Todo: Authenticated User
	const { data: entries } = await supabase.from('WorkingEntries').select(
		`
	id,
	begin,
	end,
	sick_leave,
	job_id,
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
	// Todo: Authenticated User
	const { data: userJobs } = await supabase
		.from('Jobs')
		.select('*')
		.eq('user_id', 1);

	return userJobs;
}

export async function getSingleEntry(id: string) {
	const { data: entry } = await supabase
		.from('WorkingEntries')
		.select(
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
		)
		.eq('id', id)
		.limit(1)
		.single();

	return entry;
}
