'use client';

import { WorkingEntryWithJob } from '@/types/entries';

import CalendarBody from './CalendarBody';

export default function Calendar({
	entries,
}: {
	entries: WorkingEntryWithJob[];
}) {
	return <CalendarBody entries={entries} />;
}
