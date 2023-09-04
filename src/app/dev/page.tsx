'use server';

import { updatedSampleDataRecords, updatedSampleJobs } from '@/lib/helpers';
import { supabaseBackend } from '@/lib/supabaseClient';

export default async function DevPage() {
	return (
		<>
			<h1>DevPage</h1>
			<form action={deleteAllJobs}>
				<button type="submit">Delete all Jobs</button>
			</form>

			<form action={insertSampleJobs}>
				<button type="submit">Insert Sample Jobs</button>
			</form>

			<form action={insertSampleEntries}>
				<button type="submit">Insert Sample Entries</button>
			</form>
		</>
	);
}

export async function deleteAllJobs() {
	'use server';

	const { data, error, statusText } = await supabaseBackend
		.from('Jobs')
		.delete()
		.neq('id', '0');

	if (error) {
		console.error(error);
		return;
	}
}

export async function insertSampleJobs() {
	'use server';

	const { data, error, statusText } = await supabaseBackend
		.from('Jobs')
		.insert(updatedSampleJobs);

	if (error) {
		console.error(error);
		return;
	}
}

export async function insertSampleEntries() {
	'use server';

	const { data, error, statusText } = await supabaseBackend
		.from('WorkingEntries')
		.insert(updatedSampleDataRecords)
		.select();

	if (error) {
		console.error(error);
		return;
	}
}
