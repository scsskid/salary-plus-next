import { WorkingEntryWithJob } from '@/types/entries';
import Month from './Month';
import Weekdays from './Weekdays';
import WorkingEntriesListItem from '../WorkingEntriesListItem';
import { filterEntriesByBegin, isSameDay } from '@/lib/helpers';
import { useInputDate } from '@/lib/hooks/useInputDateContext';
import InputDateNav from '../InputDateNav';

export default function CalendarBody({
	entries,
}: {
	entries: WorkingEntryWithJob[];
}) {
	const { inputDate } = useInputDate();

	const entiresOfDay = filterEntriesByBegin(entries, inputDate, isSameDay);

	return (
		<div className="calendar-body">
			<InputDateNav />
			<Weekdays />
			<Month
				startDate={(() => getMonthStartDate(inputDate))()}
				handleDateClick={() => console.log('no handler defined')}
				entries={entries}
			/>
			{entiresOfDay.length > 0 && (
				<div className="calendar-entries">
					<h3>Entries for {inputDate.toLocaleDateString()}</h3>
					<ul>
						{entiresOfDay.map((entry) => (
							<li key={entry.id}>
								<>
									<pre hidden>{JSON.stringify(entry, null, 2)}</pre>
									<WorkingEntriesListItem {...entry} />
								</>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}

export function getMonthStartDate(input) {
	const dt = new Date(input);
	dt.setHours(0, 0, 0, 0);
	return new Date(dt.setDate(1));
}
