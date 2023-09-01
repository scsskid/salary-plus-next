import { createJob, updateJob } from '@/lib/server-actions';
import SubmitButton from './SubmitButton';
import { supabase } from '@/lib/supabaseClient';

export function CreateJobForm() {
	return (
		<form action={createJob}>
			<fieldset>
				<legend>Add Job</legend>
				<div className="form-element">
					<label htmlFor="title">Titel</label>
					<input
						type="text"
						name="title"
						id="title"
						placeholder="Enter title..."
						required
					/>
				</div>
				<label htmlFor="simple_wage">Hourly wage</label>
				<input
					type="number"
					name="simple_wage"
					id="simple_wage"
					required
					placeholder="Enter wage..."
				/>
				<SubmitButton />
			</fieldset>
		</form>
	);
}

export async function EditJobForm({ id }: { id: number }) {
	const { data: job } = await supabase
		.from('Jobs')
		.select('*')
		.eq('id', id)
		.single();

	if (!job) {
		return <p>Couldn&apos;t load job data.</p>;
	}

	return (
		<form action={updateJob}>
			<fieldset>
				<legend>Add Job</legend>
				<input type="hidden" name="id" value={id} />
				<div className="form-element">
					<label htmlFor="title">Titel</label>
					<input
						type="text"
						name="title"
						id="title"
						placeholder="Enter title..."
						required
						defaultValue={job.title}
					/>
				</div>
				<label htmlFor="simple_wage">Hourly wage</label>
				<input
					type="number"
					name="simple_wage"
					id="simple_wage"
					required
					placeholder="Enter wage..."
					defaultValue={job.simple_wage}
				/>
				<SubmitButton />
			</fieldset>
		</form>
	);
}
