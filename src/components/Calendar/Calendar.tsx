'use client';

import { useState } from 'react';
import Month from './Month';
import Weekdays from './Weekdays';
import { WorkingEntriesList } from '@/types/entries';
import { filterEntriesByDate } from '@/lib/helpers';
import WorkingEntriesListItem from '../WorkingEntriesListItem';

export default function Calendar({ entries }: WorkingEntriesList) {
	const [inputDate, setInputDate] = useState(new Date());

	const inputDateEntries = filterEntriesByDate(entries, inputDate);

	return (
		<>
			<div className="calendar-body">
				<p>
					{inputDate.toLocaleDateString('default', { month: 'long' })}{' '}
					{inputDate.getFullYear()}
					<br />
					inputDate:{' '}
					<b>
						{inputDate.toLocaleDateString('default', {
							day: 'numeric',
							month: 'short',
							year: 'numeric',
						})}
					</b>
				</p>
				<Weekdays />
				<Month
					startDate={(() => getMonthStartDate(inputDate))()}
					handleDateClick={() => console.log('no handler defined')}
					inputDate={inputDate}
					setInputDate={setInputDate}
					entries={entries}
				/>
				{inputDateEntries.length > 0 && (
					<div className="calendar-entries">
						<h3>Entries for {inputDate.toLocaleDateString()}</h3>
						<ul>
							{inputDateEntries.map((entry) => (
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
		</>
	);
}

export function getMonthStartDate(input) {
	const dt = new Date(input);
	dt.setHours(0, 0, 0, 0);
	return new Date(dt.setDate(1));
}
