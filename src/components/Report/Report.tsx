'use client';

import InputDateNav from '../InputDateNav';
import ReportBody from './ReportBody';
import { WorkingEntryWithJob } from '@/types/entries';

export type Props = {
	entries: WorkingEntryWithJob[];
	jobs: [];
};

export default function Report({ entries, jobs }: Props) {
	if (!entries) {
		return <div>could not load entries...</div>;
	}

	return (
		<>
			<InputDateNav />
			<ReportBody entries={entries} jobs={jobs} />
		</>
	);
}
