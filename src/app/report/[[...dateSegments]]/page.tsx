import { getInputDateFromParams } from '@/app/calendar/[[...dateSegments]]/page';
import InputDateNav from '@/components/InputDateNav';
import Report from '@/components/Report/Report';
import { getJobs, getWorkingEntries } from '@/lib/dataFetchers';

import { DateCatchAllType } from '@/types/general';

export default async function ReportPage({ params }: DateCatchAllType) {
	const entries = await getWorkingEntries();
	const jobs = await getJobs();
	const inputDateFromParams = getInputDateFromParams({ params });

	if (!entries) {
		return <div>could not load entries...</div>;
	}

	if (!jobs) {
		return <div>could not load jobs...</div>;
	}

	return (
		<>
			<h1>ReportPage</h1>

			<InputDateNav inputDate={inputDateFromParams} basePath="/report" />
			{/* @ts-ignore */}
			<Report entries={entries} jobs={jobs} inputDate={inputDateFromParams} />
		</>
	);
}
