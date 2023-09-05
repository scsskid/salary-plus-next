'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
	const pathname = usePathname();

	console.log(pathname);

	return (
		<header className="wrap site-header">
			<p className="logo">
				<Link href={'/'}>Salary Plus Next</Link>
			</p>
			<nav className="main-navigation">
				<ol>
					<li className={pathname === '/' ? 'active' : ''}>
						<Link href="/">Calendar</Link>
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
