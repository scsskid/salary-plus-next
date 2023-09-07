'use client';

import { WorkingEntry, Job } from '@/types/entries';
import Month from './Month';
import Weekdays from './Weekdays';
import WorkingEntriesListItem from '../WorkingEntriesListItem';
import { filterEntriesByBegin, isSameDay } from '@/lib/helpers';
import InputDateNav from '../InputDateNav';

type Props = {
	entries: WorkingEntry & { Jobs: Job }[];
	inputDateFromParams: Date;
};

export default function CalendarBody({
	inputDateFromParams: inputDate,
	entries,
}: Props) {
	// const { inputDate } = useInputDate();

	/* @ts-ignore  */
	const entiresOfDay = filterEntriesByBegin(entries, inputDate, isSameDay);

	console.log({ inputDate, entiresOfDay });

	return (
		<div className="calendar-body">
			{/* <InputDateProvider value={inputDate}> */}
			<InputDateNav inputDate={inputDate} />
			<Weekdays />
			<Month
				startDate={(() => getMonthStartDate(inputDate))()}
				handleDateClick={() => console.log('no handler defined')}
				// @ts-ignore
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
									{/* @ts-ignore  */}
									<WorkingEntriesListItem {...entry} />
								</>
							</li>
						))}
					</ul>
				</div>
			)}
			{/* </InputDateProvider> */}
		</div>
	);
}

export function getMonthStartDate(input: string | Date) {
	const dt = new Date(input);
	dt.setHours(0, 0, 0, 0);
	return new Date(dt.setDate(1));
}
