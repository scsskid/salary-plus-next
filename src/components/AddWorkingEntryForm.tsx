import SubmitButton from './SubmitButton';
import { supabase } from '@/lib/supabaseClient';

type Props = {
	createWorkingEntry: (formData: FormData) => Promise<{ message: string }>;
};
export default async function AddWorkingEntryForm({
	createWorkingEntry,
}: Props) {
	const { data: jobs, error } = await supabase.from('Jobs').select('*');

	return (
		<div className="flow">
			<h2>Add Entry</h2>
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
		</div>
	);
}
