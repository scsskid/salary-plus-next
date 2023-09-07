'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
	const pathname = usePathname();

	return (
		<header className="wrap site-header">
			<p className="logo">
				<Link href={'/'}>Salary Plus Next</Link>
			</p>
			<nav className="main-navigation">
				<ol>
					<li className={pathname === '/' ? 'active' : ''}>
						<Link href="/">Home</Link>
					</li>
					<li className={pathname === '/calendar' ? 'active' : ''}>
						<Link href="/calendar">Calendar</Link>
					</li>
					<li className={pathname === '/report' ? 'active' : ''}>
						<Link href="/report">Report</Link>
					</li>
					<li className={pathname === '/account' ? 'active' : ''}>
						<Link href="/account">Account</Link>
					</li>
					<li className={pathname === '/dev' ? 'active' : ''}>
						<Link href="/dev">Dev</Link>
					</li>
				</ol>
			</nav>
		</header>
	);
}
