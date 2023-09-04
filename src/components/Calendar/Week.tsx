import {
	filterEntriesByBegin,
	filterEntriesByDate,
	isSameDay,
} from '@/lib/helpers';
import { useInputDate } from '@/lib/hooks/useInputDateContext';

export default function Week({
	startDate = new Date('1982/10/04'),
	entries = [],
	jobs,
	handleDateClick = () => {
		console.warn('no handler for dateClick');
	},
	requestedMonthIndex,
	bleedMonth = false,
}) {
	const endDate = new Date(startDate).setDate(startDate.getDate() + 7);

	const cells = [];
	for (const d = new Date(startDate); d < endDate; d.setDate(d.getDate() + 1)) {
		const isBleedDate = d.getMonth() !== requestedMonthIndex;

		if (isBleedDate && bleedMonth === false) {
			cells.push(
				<div
					key={'datecell-' + d}
					className="calendar-date calendar-date--empty"
				></div>
			);
		} else {
			cells.push(
				<DateCell
					key={'datecell-' + d}
					date={new Date(d)}
					handleDateClick={handleDateClick}
					entries={entries}
					jobs={jobs}
					isBleedDate={isBleedDate}
				/>
			);
		}
	}

	return <div className="week-row calendar-week">{cells}</div>;
}

function DateCell({
	date = null,
	jobs = [],
	entries = [],
	isBleedDate = false,
}) {
	/* filter entries.begin if it matches date */

	const { inputDate, setInputDate } = useInputDate();

	const inputDateIsDate = isSameDay(inputDate, date);
	const entiresOfDay = filterEntriesByBegin(entries, date, isSameDay);

	const day = date
		.toLocaleDateString('en-US', { weekday: 'short' })
		.toLowerCase();

	return (
		<div
			className="calendar-date"
			data-date-string={date.toISOString()}
			data-day={day}
			style={{
				opacity: isBleedDate ? 0.2 : 1,
			}}
		>
			<button
				type="button"
				style={{ color: inputDateIsDate ? 'red' : 'currentColor' }}
				className="calendar-date-button"
				onClick={() => setInputDate(date)}
				// onKeyUp={handleKeyUp}
			>
				<div className="calendar-date-button-figure">
					<span>{date.getDate()}</span>
				</div>
				{entiresOfDay.length > 0 && (
					<div data-records>
						{entiresOfDay.map((record, i) => (
							<DateCellEventIndicator key={i} record={record} jobs={jobs} />
						))}
					</div>
				)}
			</button>
		</div>
	);
}

function DateCellEventIndicator({ record, jobs = [] }) {
	return (
		<div className="calendar-date-event">
			<small>{record.id}</small>
		</div>
	);
}
