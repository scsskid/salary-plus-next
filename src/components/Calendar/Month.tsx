import * as React from 'react';
import Week from './Week';

export default function Month({
	startDate = new Date(),
	jobs = [],
	entries = [],
}) {
	const weeks = [];
	const requestedMonthIndex = startDate.getMonth();
	const requestedYear = startDate.getFullYear();
	const calendarStartDate = getWeekStartDate(startDate);

	for (let i = 0; i < 42; i = i + 7) {
		const requestedDate = new Date(
			calendarStartDate.getTime() + i * 60 * 60 * 24 * 1000
		);

		const isNextMonth =
			(requestedDate.getMonth() > requestedMonthIndex &&
				requestedDate.getFullYear() === requestedYear) ||
			requestedDate.getFullYear() > requestedYear;

		if (isNextMonth) {
			break;
		}

		weeks.push(
			<Week
				key={i}
				startDate={requestedDate}
				jobs={jobs}
				requestedMonthIndex={requestedMonthIndex}
				bleedMonth={false}
				entries={entries}
			/>
		);
	}

	return weeks;
}

export function getWeekStartDate(dateObj: Date, firstDayOfWeekIndex = 1) {
	const dayOfWeek = dateObj.getDay();
	const firstDayOfWeek = new Date(dateObj);
	const diff =
		dayOfWeek >= firstDayOfWeekIndex
			? dayOfWeek - firstDayOfWeekIndex
			: 6 - dayOfWeek;

	firstDayOfWeek.setDate(dateObj.getDate() - diff);
	firstDayOfWeek.setHours(0, 0, 0, 0);

	return firstDayOfWeek;
}
