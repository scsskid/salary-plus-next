'use server';

import { revalidatePath } from 'next/cache';
import { supabaseBackend } from '@/lib/supabaseClient';

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

export async function deleteWorkingEntry(id: number) {
	const { data, error, statusText } = await supabaseBackend
		.from('WorkingEntries')
		.delete()
		.eq('id', id);

	if (error) {
		console.error(error);
		return { message: 'Error!' };
	}

	revalidatePath('/');

	return { message: 'Success!' };
}

export async function deleteJob(id: number) {
	const { data, error, statusText } = await supabaseBackend
		.from('Jobs')
		.delete()
		.eq('id', id);

	if (error) {
		console.error(error);
		return { message: 'Error!' };
	}

	revalidatePath('/');

	return { message: 'Success!' };
}
