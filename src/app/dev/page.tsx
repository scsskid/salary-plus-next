'use server';

import {
	updatedSampleDataRecords,
	updatedSampleJobs,
} from '@/lib/legacySampleDataHelpers';
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

async function deleteAllJobs() {
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

async function insertSampleJobs() {
	'use server';

	const { data, error, statusText } = await supabaseBackend
		.from('Jobs')
		.insert(updatedSampleJobs);

	if (error) {
		console.error(error);
		return;
	}
}

async function insertSampleEntries() {
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
