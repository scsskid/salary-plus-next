import Link from 'next/link';

import styles from './Header.module.css';
import RevalidateButton from './RevalidateButton';
import { revalidatePath } from 'next/cache';

type Props = {};

export default function Header({}: Props) {
	const purge = async () => {
		'use server';

		revalidatePath('/');
		return;
	};

	return (
		<header className={`wrap ${styles.header}`}>
			<p className={styles.logo}>
				<Link href={'/'}>Salary Plus Next</Link>
			</p>
			<nav className={styles['main-navigation']}>
				<ol>
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/account/entries/new">New Entry</Link>
					</li>
					<li>
						<Link href="/account">Account</Link>
					</li>
					<li style={{ marginLeft: 'auto' }}>
						<RevalidateButton formHandler={purge} />
					</li>
				</ol>
			</nav>
		</header>
	);
}
