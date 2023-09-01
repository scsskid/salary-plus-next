import Link from 'next/link';

import styles from './Header.module.css';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

type Props = {};

export default function Header({}: Props) {
	const purge = async () => {
		'use server';
		revalidatePath('/');
		redirect('/');
	};

	return (
		<header className={`wrap ${styles.header}`}>
			<p className={styles.logo}>
				<Link href={'/'}>Salary Plus Next</Link>
			</p>
			<nav className={styles['main-navigation']}>
				<ol>
					<li>
						<Link href="/account/entries">List Entries</Link>
					</li>
					<li>
						<Link href="/account/entries/add">Add Entry</Link>
					</li>
					<li style={{ marginLeft: 'auto' }}>
						<form action={purge}>
							<button type="submit">Try manual revalidate</button>
						</form>
					</li>
				</ol>
			</nav>
		</header>
	);
}
