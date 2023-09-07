import { getWorkingEntries } from '@/lib/dataFetchers';
import Calendar from '@/components/Calendar/Calendar';

import { DateCatchAllType } from '@/types/general';

export default async function CalendarCatchAllPage({
	params,
}: DateCatchAllType) {
	const entries = await getWorkingEntries();
	const inputDateFromParams = getInputDateFromParams({ params });

	return (
		<div>
			<h1>CalendarCatchAllPage</h1>

			<Calendar
				inputDateFromParams={inputDateFromParams}
				/* @ts-ignore */
				entries={entries}
			/>
		</div>
	);
}

export function getInputDateFromParams({ params }: DateCatchAllType) {
	if (!params.dateSegments) {
		return new Date();
	}

	const [year, month, day] = params.dateSegments;

	return new Date(`${year}-${month}-${day}`);
}
