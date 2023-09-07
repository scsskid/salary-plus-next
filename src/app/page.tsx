import Link from 'next/link';

export default async function Home() {
	return (
		<div className="flow">
			<p>
				<Link href="/calendar">Calendar</Link>
			</p>
		</div>
	);
}
