import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Salary Plus Next',
};

export default async function Home() {
	return (
		<div className="flow">
			<section>
				<h2>Calendar</h2>
			</section>
		</div>
	);
}
