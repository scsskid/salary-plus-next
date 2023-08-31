import { PostgrestError } from '@supabase/supabase-js';
import SubmitButton from './SubmitButton';
import { supabase } from '@/lib/supabaseClient';

import type { Tables } from '@/types/helper-types';
type Job = Tables<'Jobs'>;

type AddProps = {
	createWorkingEntry: (formData: FormData) => Promise<{ message: string }>;
};

export async function AddWorkingEntryForm({ createWorkingEntry }: AddProps) {
	const { jobs, error } = await getJobs();

	return (
		<form action={createWorkingEntry}>
			<div className="form-element">
				<label htmlFor="begin">Begin</label>
				<input
					type="datetime-local"
					name="begin"
					id="begin"
					defaultValue={new Date().toISOString().split('.')[0] + ''}
					required
				/>
			</div>
			<div className="form-element">
				<label htmlFor="end">End</label>
				<input
					type="datetime-local"
					name="end"
					id="end"
					defaultValue={new Date().toISOString().split('.')[0] + ''}
					required
				/>
			</div>
			<div className="form-element">
				{error && <p>Error: {error.message}</p>}
				<label htmlFor="job_id">Job</label>
				<select name="job_id" id="job_id" required defaultValue={''}>
					<option value="" disabled>
						--Please choose a job--
					</option>
					{jobs?.map(({ id, title }) => (
						<option value={id} key={id}>
							{title}
						</option>
					))}
				</select>
			</div>
			<SubmitButton />
		</form>
	);
}

export async function EditWorkingEntryForm({ id }: { id: string }) {
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

	if (!entry) {
		return <p>Couldn&apos;t load entry data.</p>;
	}

	console.log(entry);

	const { jobs, error } = await getJobs();

	return (
		<form>
			<pre>{JSON.stringify(entry, null, 2)}</pre>
			<div className="form-element">
				<label htmlFor="begin">Begin</label>
				<input
					type="datetime-local"
					name="begin"
					id="begin"
					// value={}
					required
				/>
			</div>
		</form>
	);
}

async function getJobs(): Promise<{
	jobs: Job[];
	error: PostgrestError | null;
}> {
	const { data: jobs, error } = await supabase.from('Jobs').select('*');

	if (!jobs) {
		throw new Error(`Couldn't load jobs data.`);
	}

	return { jobs, error };
}
