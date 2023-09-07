import { getWorkingEntries } from '@/lib/dataFetchers';
import { notFound } from 'next/navigation';
import Calendar from '@/components/Calendar/Calendar';
type Props = {
	params: {
		dateSegments: string[];
	};
};

const today = new Date();

const defaultDateSegments = [
	today.getFullYear().toString(),
	(today.getMonth() + 1).toString(),
	today.getDate().toString(),
];

export default async function CalendarCatchAllPage({ params }: Props) {
	const entries = await getWorkingEntries();

	let { dateSegments } = params;

	if (!dateSegments) {
		dateSegments = defaultDateSegments;
	}

	if (dateSegments.length !== 3) {
		return notFound();
	}

	console.log({ dateSegments });

	const [year, month, day] = dateSegments;

	const inputDateFromParams = new Date(`${year}-${month}-${day}`);

	return (
		<div>
			<h1>CalendarCatchAllPage</h1>
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
			<Calendar
				inputDateFromParams={inputDateFromParams}
				/* @ts-ignore */
				entries={entries}
			/>
		</div>
	);
}
