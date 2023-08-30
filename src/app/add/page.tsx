'use client';

import { createWorkingEntry } from './actions';
import styles from './page.module.css';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

export default function AddPage() {
	return (
		<div>
			<h2 className={styles.heading}>AddPage</h2>
			<form action={createWorkingEntry}>
				<label htmlFor="begin">Begin</label>
				<input type="datetime-local" name="begin" id="begin" required />
				<label htmlFor="end">End</label>
				<input type="datetime-local" name="end" id="end" required />

				<SubmitButton />
			</form>
		</div>
	);
}

function SubmitButton() {
	const { pending } = useFormStatus();
	return (
		<>
			<p>Status: {pending.toString()}</p>
			<button type="submit" disabled={pending}>
				{pending ? 'Creating...' : 'Submit'}
			</button>
		</>
	);
}
