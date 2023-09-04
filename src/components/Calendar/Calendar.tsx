'use client';

import { WorkingEntriesList } from '@/types/entries';

import { InputDateProvider } from '@/lib/hooks/useInputDateContext';
import CalendarBody from './CalendarBody';

export default function Calendar({ entries }: WorkingEntriesList) {
	return (
		<InputDateProvider>
			<CalendarBody entries={entries} />
		</InputDateProvider>
	);
}
