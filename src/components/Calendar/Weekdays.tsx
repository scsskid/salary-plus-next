import * as React from 'react';

export default function Weekdays({ firstDayOfWeekIndex = 1 }) {
	let cells = [];
	for (let i = 0; i < 7; i++) {
		const weekdayName = getWeekDayNames({
			firstDayOfWeekIndex,
		})[i];

		// todo: data name must bne english
		cells.push(
			<div
				key={`weekday-headcell-${i}`}
				data-day={weekdayName.english.toLowerCase()}
			>
				{weekdayName.localized}
			</div>
		);
	}

	return <div className="calendar-weekdays">{cells}</div>;
}

function getWeekDayNames({ firstDayOfWeekIndex = 1 }) {
	const names = [];
	const date = new Date('2020-10-04');
	date.setDate(date.getDate() + firstDayOfWeekIndex - 1);
	let days = 7;

	while (days !== 0) {
		date.setDate(date.getDate() + 1);
		names.push({
			localized: date.toLocaleDateString('default', { weekday: 'short' }),
			english: date.toLocaleDateString('default', { weekday: 'short' }),
		});
		days--;
	}

	return names;
}
