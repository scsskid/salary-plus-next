'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
	{ href: '/', text: 'Home', key: 'home' },
	{ href: '/calendar', text: 'Calendar', key: 'calendar' },
	{ href: '/report', text: 'Report', key: 'report' },
	{ href: '/account', text: 'Account', key: 'account' },
	{ href: '/dev', text: 'Dev', key: 'dev' },
	{ href: '/login', text: 'Sign Up/Sign In', key: 'login' },
];

export default function Header() {
	const pathname = usePathname();

	return (
		<header className="wrap site-header">
			<p className="logo">
				<Link href={'/'}>Salary Plus Next</Link>
			</p>
			<nav className="main-navigation">
				<ol>
					{navItems.map((item) => (
						<li
							key={item.key}
							className={pathname === item.href ? 'active' : ''}
						>
							<Link href={item.href}>{item.text}</Link>
						</li>
					))}
				</ol>
			</nav>
		</header>
	);
}
