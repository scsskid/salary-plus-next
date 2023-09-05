import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
	return (
		<header className="wrap site-header">
			<p className="logo">
				<Link href={'/'}>Salary Plus Next</Link>
			</p>
			<nav className="main-navigation">
				<ol>
					<li>
						<Link href="/">Calendar</Link>
					</li>
					<li>
						<Link href="/report">Report</Link>
					</li>
					<li>
						<Link href="/account">Account</Link>
					</li>
					<li>
						<Link href="/dev">Dev</Link>
					</li>
				</ol>
			</nav>
		</header>
	);
}
