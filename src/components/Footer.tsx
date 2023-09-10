import { revalidatePath } from 'next/cache';
import RevalidateButton from './RevalidateButton';
import AuthStatus from './AuthStatus';

export default function Footer() {
	const purge = async () => {
		'use server';

		revalidatePath('/');
		return;
	};

	return (
		<footer className="wrap site-footer">
			&copy; {new Date().getFullYear()}
			<AuthStatus />
			<RevalidateButton formHandler={purge} />
		</footer>
	);
}
