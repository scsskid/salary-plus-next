'use client';

import { InputDateProvider } from '@/lib/hooks/useInputDateContext';
import InputDateNav from '../InputDateNav';
import ReportBody from './ReportBody';
import { WorkingEntriesList } from '@/types/entries';

export default function Report({ entries }: WorkingEntriesList) {
	if (!entries) {
		return <div>could not load entries...</div>;
	}

	return (
		<InputDateProvider>
			<InputDateNav />
			<ReportBody entries={entries} />
		</InputDateProvider>
	);
}
