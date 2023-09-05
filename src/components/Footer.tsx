import { revalidatePath } from 'next/cache';
import styles from './Footer.module.css';
import RevalidateButton from './RevalidateButton';

type Props = {};
export default function Footer({}: Props) {
	const purge = async () => {
		'use server';

		revalidatePath('/');
		return;
	};

	return (
		<footer className={`wrap ${styles.footer}`}>
			&copy; {new Date().getFullYear()}
			<RevalidateButton formHandler={purge} />
		</footer>
	);
}
