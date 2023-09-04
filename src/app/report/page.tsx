import InputDateNav from '@/components/InputDateNav';
import InputDateProviderWrapper from '@/components/InputDateProviderWrapper';
import Report from '@/components/Report/Report';
import { getJobs, getWorkingEntries } from '@/lib/dataFetchers';
import { WorkingEntry } from '@/types/entries';

export default async function ReportPage() {
	const entries = await getWorkingEntries();
	const jobs = await getJobs();

	if (!entries) {
		return <div>could not load entries...</div>;
	}

	if (!jobs) {
		return <div>could not load jobs...</div>;
	}

	return (
		<>
			<h1>ReportPage</h1>
			<InputDateProviderWrapper>
				{/* @ts-ignore */}
				<Report entries={entries} jobs={jobs} />
			</InputDateProviderWrapper>
		</>
	);
}
