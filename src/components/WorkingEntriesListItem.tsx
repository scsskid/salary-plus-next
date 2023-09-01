import Link from 'next/link';
import DeleteButton from './DeleteButton';
import { calculateWage, getDateDifferenceInHouse } from '@/lib/helpers';
import { deleteWorkingEntry } from '@/lib/server-actions';

import type { Tables } from '@/types/helper-types';
type WorkingEntry = Tables<'WorkingEntries'>;
type Job = Tables<'Jobs'>;

type Props = Omit<WorkingEntry, 'created_at'> & {
	Jobs: Job;
};

export default function WorkingEntriesListItem(item: Props) {
	const { id, begin, end, Jobs } = item;
	const { title: jobTitle, simple_wage } = Jobs;

	return (
		<li>
			{id} → {new Date(begin).toLocaleDateString('de')}{' '}
			{new Date(begin).toLocaleTimeString('de')} -{' '}
			{new Date(end).toLocaleTimeString('de')} ({jobTitle})
			<ul>
				<li>{getDateDifferenceInHouse(new Date(begin), new Date(end))}h </li>
				<li>
					Claimable Wage:{' '}
					{calculateWage(simple_wage, new Date(begin), new Date(end))} €
				</li>
			</ul>
			<Link href={`/account/entries/${id}`}>Edit</Link>{' '}
			<form action={deleteWorkingEntry}>
				<DeleteButton id={id} />
			</form>
		</li>
	);
}
