import Link from 'next/link';
import DeleteButton from './DeleteButton';
import { calculateWage, getDateDifferenceInHouse } from '@/lib/helpers';
import { deleteWorkingEntry } from '@/lib/server-actions';

import type { Tables } from '@/types/helper-types';
type WorkingEntry = Tables<'WorkingEntries'>;
type Job = Tables<'Jobs'>;

type Props = WorkingEntry & {
	Jobs: Job;
};

const timeStringOptions = {
	hour: '2-digit',
	minute: '2-digit',
} as Intl.DateTimeFormatOptions;

export default function WorkingEntriesListItem(item: Props) {
	const { id, begin, end, Jobs } = item;
	const { title: jobTitle, simple_wage } = Jobs;

	const displayTimeBegin = new Date(begin).toLocaleTimeString(
		'de',
		timeStringOptions
	);
	const displayTimeEnd = new Date(end).toLocaleTimeString(
		'de',
		timeStringOptions
	);

	return (
		<div data-working-entry-id={id}>
			<div>
				{new Date(begin).toLocaleDateString('de')}
				<br />
				{displayTimeBegin} - {displayTimeEnd}
				<br />
				{'@'}
				{jobTitle}
			</div>
			<ul className="ui-list">
				<li>{getDateDifferenceInHouse(new Date(begin), new Date(end))}h </li>
				<li>{calculateWage(simple_wage, new Date(begin), new Date(end))} €</li>
			</ul>
			<Link href={`/account/entries/${id}`}>Edit</Link>{' '}
			<form action={deleteWorkingEntry}>
				<DeleteButton id={id} />
			</form>
		</div>
	);
}
