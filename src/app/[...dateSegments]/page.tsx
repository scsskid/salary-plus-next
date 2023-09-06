import Calendar from '@/components/Calendar/Calendar';
import { getWorkingEntries } from '@/lib/dataFetchers';
import { notFound } from 'next/navigation';

type Props = {
	params: {
		dateSegments: string[];
	};
};
export default async function InputDatePage({ params }: Props) {
	const { dateSegments } = params;

	const year = dateSegments[0] || '1970';
	const month = dateSegments[1] || '1';
	const day = dateSegments[2] || '1';

	const entries = await getWorkingEntries();

	const inputDateFromParams = new Date(`${year}-${month}-${day}`);

	if (dateSegments.length === 0 || isNaN(Number(year)) || year.length !== 4) {
		return notFound();
	}

	return (
		<div>
			<h1>InputDatePage</h1>
			<pre>
				{JSON.stringify(
					{
						year,
						month,
						day,
						inputDateFromParams:
							inputDateFromParams.toLocaleDateString('de-DE'),
					},
					null,
					2
				)}
			</pre>
			<h2>Calendar</h2>
			{/* @ts-ignore */}
			<Calendar inputDate={inputDateFromParams} entries={entries} />
		</div>
	);
}
