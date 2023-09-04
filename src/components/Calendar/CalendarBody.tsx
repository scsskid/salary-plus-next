import { WorkingEntriesList } from '@/types/entries';
import Month from './Month';
import Weekdays from './Weekdays';
import WorkingEntriesListItem from '../WorkingEntriesListItem';
import { filterEntriesByDate } from '@/lib/helpers';
import { useInputDate } from '@/lib/hooks/useInputDateContext';

export default function CalendarBody({ entries }: WorkingEntriesList) {
	const { inputDate, setInputDate } = useInputDate();

	const inputDateEntries = filterEntriesByDate(entries, inputDate);

	return (
		<div className="calendar-body">
			<nav>
				<button
					onClick={() => {
						setInputDate(
							new Date(inputDate.getFullYear(), inputDate.getMonth() - 1, 1)
						);
					}}
				>
					Previous Month
				</button>
				<button
					onClick={() => {
						setInputDate(
							new Date(inputDate.getFullYear(), inputDate.getMonth() + 1, 1)
						);
					}}
				>
					Next Month
				</button>

				<button
					onClick={() => {
						setInputDate(new Date());
					}}
				>
					Today
				</button>
			</nav>
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
	);
}

export function getMonthStartDate(input) {
	const dt = new Date(input);
	dt.setHours(0, 0, 0, 0);
	return new Date(dt.setDate(1));
}
