import Calendar from '@/components/Calendar/Calendar';
import { getWorkingEntries } from '@/lib/dataFetchers';
import InputDateProviderWrapper from '@/components/InputDateProviderWrapper';

export default async function Home() {
	const entries = await getWorkingEntries();

	if (!entries) {
		return <div>could not load entries...</div>;
	}

	return (
		<div className="flow">
			<h1>Calendar</h1>
			<InputDateProviderWrapper>
				{/* @ts-ignore  */}
				<Calendar entries={entries} />
			</InputDateProviderWrapper>
		</div>
	);
}
