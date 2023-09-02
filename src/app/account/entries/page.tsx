import WorkingEntriesListItem from '@/components/WorkingEntriesListItem';
import { getWorkingEntries } from '@/lib/dataFetchers';
import Link from 'next/link';

type Props = {};
export default async function AccountEntriesPage({}: Props) {
	const entries = await getWorkingEntries();

	if (!entries) {
		return <div>Couldn&apos;t load entreis</div>;
	}

	return (
		<>
			<h1>AccountEntriesPage</h1>
			<Link href="/account/entries/new">New Entry</Link>
			<ul>
				{entries.map((entry) => (
					// @ts-ignore
					<WorkingEntriesListItem key={entry.id} {...entry} />
				))}
			</ul>
		</>
	);
}
