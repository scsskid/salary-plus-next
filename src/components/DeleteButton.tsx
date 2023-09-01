'use client';

import { experimental_useFormStatus as useFormStatus } from 'react-dom';

type Props = {
	id: number;
};

export default function DeleteButton({ id }: Props) {
	const formStatus = useFormStatus();
	return (
		<>
			<input type="hidden" name="id" value={id} />
			<button type="submit">Delete</button>
			{formStatus.pending && <p>Deleting...</p>}
		</>
	);
}
