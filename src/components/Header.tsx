import Link from 'next/link';

import styles from './Header.module.css';

type Props = {};

export default function Header({}: Props) {
	console.log(styles);

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
				</ol>
			</nav>
		</header>
	);
}
