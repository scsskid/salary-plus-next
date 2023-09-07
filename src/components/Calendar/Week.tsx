import { filterEntriesByBegin, isSameDay } from '@/lib/helpers';
import { useInputDate } from '@/lib/hooks/useInputDateContext';
import { Job, WorkingEntryWithJob } from '@/types/entries';
import Link from 'next/link';
import { getDateString } from '../InputDateNav';

type Props = {
	startDate?: Date;
	entries?: any[];
	jobs?: Job[];
	requestedMonthIndex: number;
	bleedMonth?: boolean;
};

export default function Week({
	startDate = new Date('1982/10/04'),
	entries = [],
	jobs = [],
	requestedMonthIndex = 0,
	bleedMonth = false,
}: Props) {
	const endDate = new Date(startDate);
	endDate.setDate(startDate.getDate() + 7);

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
					entries={entries}
					jobs={jobs}
					isBleedDate={isBleedDate}
				/>
			);
		}
	}

	return <div className="week-row calendar-week">{cells}</div>;
}

type DateCellProps = {
	date: Date;
	entries: WorkingEntryWithJob[];
	jobs: Job[];
	isBleedDate: boolean;
};

function DateCell({
	date = new Date(),
	jobs = [],
	entries = [],
	isBleedDate = false,
}: DateCellProps) {
	/* filter entries.begin if it matches date */

	const { inputDate } = useInputDate();

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
			<Link
				href={`/calendar/${getDateString(date)}`}
				style={{ color: inputDateIsDate ? 'red' : 'currentColor' }}
				className="calendar-date-button"
			>
				<div className="calendar-date-button-figure">
					<span>{date.getDate()}</span>
				</div>
				{entiresOfDay.length > 0 && (
					<div data-records>
						{entiresOfDay.map((record, i) => (
							// @ts-ignore
							<DateCellEventIndicator key={i} record={record} jobs={jobs} />
						))}
					</div>
				)}
			</Link>
		</div>
	);
}

function DateCellEventIndicator({
	record,
	jobs = [],
}: {
	record: WorkingEntryWithJob;
	jobs: Job[];
}) {
	return (
		<div className="calendar-date-event">
			<small>{record.id}</small>
		</div>
	);
}
