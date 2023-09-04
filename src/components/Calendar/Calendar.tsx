'use client';

import { WorkingEntry, Job } from '@/types/entries';

import CalendarBody from './CalendarBody';

export default function Calendar({
	entries,
}: {
	entries: WorkingEntry & { Jobs: Job }[];
}) {
	return <CalendarBody entries={entries} />;
}
