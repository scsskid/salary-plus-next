import Link from 'next/link';

import styles from './Header.module.css';

type Props = {};

export default function Header({}: Props) {
	return (
		<header className={`wrap ${styles.header}`}>
			<p className={styles.logo}>
				<Link href={'/'}>Salary Plus Next</Link>
			</p>
			<nav>
				<ol>
					<li>
						<Link href="/account/entries">📖 List</Link>
					</li>
					<li>
						<Link href="/account/entries/add">🆕 Add </Link>
					</li>
				</ol>
			</nav>
		</header>
	);
}
