import { revalidatePath } from 'next/cache';
import RevalidateButton from './RevalidateButton';

export default function Footer() {
	const purge = async () => {
		'use server';

		revalidatePath('/');
		return;
	};

	return (
		<footer className="wrap site-footer">
			&copy; {new Date().getFullYear()}
			<RevalidateButton formHandler={purge} />
		</footer>
	);
}
