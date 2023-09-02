import Link from 'next/link';

type Props = {};
export default async function AccountPage({}: Props) {
	return (
		<>
			<h1>AccountPage</h1>
			<p>
				<Link href="/account/entries">All Entries →</Link>
			</p>
			<p>
				<Link href="/account/jobs">All Jobs →</Link>
			</p>
		</>
	);
}
