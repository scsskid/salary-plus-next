import InputDateNav from '@/components/InputDateNav';
import Report from '@/components/Report/Report';
import { getWorkingEntries } from '@/lib/dataFetchers';

export default async function ReportPage() {
	const entries = await getWorkingEntries();

	if (!entries) {
		return <div>could not load entries...</div>;
	}

	return (
		<>
			<h1>ReportPage</h1>

			<Report entries={entries} />
		</>
	);
}
