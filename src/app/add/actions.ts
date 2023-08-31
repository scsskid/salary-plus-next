'use server';

import { supabaseBackend } from '@/lib/supabaseClient';
import { revalidatePath } from 'next/cache';

export async function createWorkingEntry(formData: FormData) {
	const { data, error, statusText } = await supabaseBackend
		.from('WorkingEntries')
		.insert({
			begin: formData.get('begin') as string,
			end: formData.get('end') as string,
			/* @ts-ignore */
			job_id: parseInt(formData.get('job_id')),
			user_id: 1,
			sick_leave: false,
		})
		.select();

	if (error) {
		console.error(error);
		return { message: 'Error!' };
	}

	revalidatePath('/');

	return { message: 'Success!' };
}
