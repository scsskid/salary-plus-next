import { filterEntriesByBegin, isSameMonth } from '@/lib/helpers';
import { useInputDate } from '@/lib/hooks/useInputDateContext';
import WorkingEntriesListItem from '../WorkingEntriesListItem';
import { WorkingEntriesList } from '@/types/entries';

export default function ReportBody({ entries }: WorkingEntriesList) {
	const { inputDate } = useInputDate();
	const entriesOfMonth = filterEntriesByBegin(entries, inputDate, isSameMonth);

	return (
		<div>
			{entriesOfMonth.length > 0 && (
				<ul>
					{entriesOfMonth.map((entry) => (
						<li key={entry.id}>
							<>
								<pre hidden>{JSON.stringify(entry, null, 2)}</pre>
								<WorkingEntriesListItem {...entry} />
							</>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
