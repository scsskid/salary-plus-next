import SubmitButton from './SubmitButton';
import { supabase } from '@/lib/supabaseClient';
import { createWorkingEntry, updateWorkingEntry } from '@/lib/server-actions';
import { getJobs, getSingleEntry } from '@/lib/dataFetchers';
import { getDefaultValueForInputDateTimeLocal } from '@/lib/helpers';

// TODO: Add validation
// TODO: Add state

export async function AddWorkingEntryForm() {
	const jobs = await getJobs();

	if (!jobs) {
		return <p>Couldn&apos;t load jobs data.</p>;
	}

	return (
		<form action={createWorkingEntry}>
			<fieldset>
				<legend>
					<b>Add Working Entry</b>
				</legend>
				<div className="form-element">
					<label htmlFor="begin">Begin</label>
					<input
						type="datetime-local"
						name="begin"
						id="begin"
						defaultValue={(() => {
							return getDefaultValueForInputDateTimeLocal(new Date());
						})()}
						required
					/>
				</div>
				<div className="form-element">
					<label htmlFor="end">End</label>
					<input
						type="datetime-local"
						name="end"
						id="end"
						defaultValue={(() => {
							return getDefaultValueForInputDateTimeLocal(new Date());
						})()}
						required
					/>
				</div>
				<div className="form-element">
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
			</fieldset>
		</form>
	);
}

export async function EditWorkingEntryForm({ id }: { id: string }) {
	const entry = await getSingleEntry(id);

	if (!entry) {
		return <p>Couldn&apos;t load entry data.</p>;
	}

	const jobs = await getJobs();

	/*  @ts-ignore */
	const selectDefaultValue = entry.Jobs.id;

	return (
		<form action={updateWorkingEntry}>
			<fieldset>
				<legend>Edit Entry {id}</legend>
				<pre>{JSON.stringify(entry, null, 2)}</pre>
				<input type="hidden" name="id" value={id} />
				<div className="form-element">
					<label htmlFor="begin">Begin</label>
					<input
						type="datetime-local"
						name="begin"
						id="begin"
						defaultValue={(() => {
							return getDefaultValueForInputDateTimeLocal(
								new Date(entry.begin)
							);
						})()}
						required
					/>
				</div>
				<div className="form-element">
					<label htmlFor="begin">End</label>
					<input
						type="datetime-local"
						name="end"
						id="end"
						defaultValue={(() => {
							return getDefaultValueForInputDateTimeLocal(new Date(entry.end));
						})()}
						required
					/>
				</div>
				<div className="form-element">
					<label htmlFor="job_id">Job</label>
					<select
						name="job_id"
						id="job_id"
						required
						defaultValue={selectDefaultValue}
					>
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
				<SubmitButton labelPending="Updating..." />
			</fieldset>
		</form>
	);
}
