import Link from 'next/link';

import styles from './Header.module.css';

type Props = {};

export default function Header({}: Props) {
	return (
		<header className={`wrap ${styles.header}`}>
			<p className={styles.logo}>
				<Link href={'/'}>Salary Plus Next</Link>
			</p>
			<nav hidden>
				<ol>
					<li>
						<Link href="/">📖 List</Link>
					</li>
					<li>
						<Link href="/add">🆕 Add </Link>
					</li>
				</ol>
			</nav>
		</header>
	);
}
