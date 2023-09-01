'use server';

import { revalidatePath } from 'next/cache';
import { supabase, supabaseBackend } from '@/lib/supabaseClient';
import { redirect } from 'next/navigation';

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

export async function updateWorkingEntry(formData: FormData) {
	const { data, error, statusText } = await supabaseBackend
		.from('WorkingEntries')
		.update({
			begin: formData.get('begin') as string,
			end: formData.get('end') as string,
			/* @ts-ignore */
			job_id: parseInt(formData.get('job_id')),
			user_id: 1,
			sick_leave: true,
		})
		// @ts-ignore
		.eq('id', formData.get('id'));

	if (error) {
		console.error(error);
		return { message: 'Error!' };
	}

	revalidatePath('/');
	redirect('/');

	return { message: 'Success!' };
}

export async function deleteWorkingEntry(formData: FormData) {
	// @ts-ignore
	const id = parseInt(formData.get('id'));

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

export async function deleteJob(formData: FormData) {
	// @ts-ignore
	const id = parseInt(formData.get('id'));

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
