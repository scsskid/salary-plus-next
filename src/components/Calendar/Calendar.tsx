'use client';

import { WorkingEntriesList } from '@/types/entries';

import CalendarBody from './CalendarBody';

export default function Calendar({ entries }: WorkingEntriesList) {
	return <CalendarBody entries={entries} />;
}
