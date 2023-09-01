'use client';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

export default function SubmitButton({
	label = 'Submit',
	labelPending = 'Creating...',
}) {
	const { pending } = useFormStatus();
	return (
		<>
			<p>pending: {pending.toString()}</p>
			<button type="submit" disabled={pending}>
				{pending ? labelPending : label}
			</button>
		</>
	);
}
