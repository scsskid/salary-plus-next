import {
	updatedSampleDataRecords,
	updatedSampleJobs,
} from '@/lib/legacySampleDataHelpers';
import { supabaseBackend } from '@/lib/supabaseClient';

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
