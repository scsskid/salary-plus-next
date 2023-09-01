'use server';

import { revalidatePath } from 'next/cache';
import { supabaseBackend } from '@/lib/supabaseClient';
import { redirect } from 'next/navigation';

export async function createWorkingEntry(formData: FormData) {
	const { error } = await supabaseBackend
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
	const { error } = await supabaseBackend
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

	const { error } = await supabaseBackend
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

export async function createJob(formData: FormData) {
	const { error } = await supabaseBackend.from('Jobs').insert({
		title: formData.get('title') as string,
		// @ts-ignore
		simple_wage: parseFloat(formData.get('simple_wage')),
		user_id: 1,
	});

	if (error) {
		console.error(error);
		return { message: 'Error!' };
	}

	revalidatePath('/');

	return { message: 'Success!' };
}

export async function updateJob(formData: FormData) {
	const { error } = await supabaseBackend

		.from('Jobs')
		.update({
			title: formData.get('title') as string,
			// @ts-ignore
			simple_wage: parseFloat(formData.get('simple_wage')),
			user_id: 1,
		})
		// @ts-ignore
		.eq('id', formData.get('id'));

	if (error) {
		console.error(error);
		return { message: 'Error!' };
	}

	revalidatePath('/');
	redirect('/account/jobs');

	return { message: 'Success!' };
}

export async function deleteJob(formData: FormData) {
	// @ts-ignore
	const id = parseInt(formData.get('id'));

	const { error } = await supabaseBackend.from('Jobs').delete().eq('id', id);

	if (error) {
		console.error(error);
		return { message: 'Error!' };
	}

	revalidatePath('/');

	return { message: 'Success!' };
}
