import '@/css/reset.css';
import '@/css/globals.css';
import type { Metadata } from 'next';
import { Fira_Sans } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AuthStatus from '@/components/AuthStatus';

const fira = Fira_Sans({
	weight: ['400', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Salary Plus Next',
	description: '',
};

/*
Since the whole application depends on cookies when using database auth 'force-dymanic'
is added to the root layout
*/
export const dynamic = 'force-dynamic';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={fira.className}>
				<div className="container">
					<Header />
					<div className="wrap">{children}</div>
					<Footer />
				</div>
			</body>
		</html>
	);
}
