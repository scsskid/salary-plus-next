import type { Metadata } from 'next';
import Calendar from '@/components/Calendar/Calendar';
import { getWorkingEntries } from '@/lib/dataFetchers';

export const metadata: Metadata = {
	title: 'Salary Plus Next',
};

export default async function Home() {
	const entries = await getWorkingEntries();

	if (!entries) {
		return <div>could not load entries...</div>;
	}

	return (
		<div className="flow">
			<section>
				<h2>Calendar</h2>
				<Calendar entries={entries} />
			</section>
		</div>
	);
}
