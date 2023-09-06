import { notFound } from 'next/navigation';

type Props = {
	params: {
		dateSegments: string[];
	};
};
export default function InputDatePage({ params }: Props) {
	const { dateSegments } = params;
	let mode = 'year';

	switch (dateSegments.length) {
		case 2:
			mode = 'month';
			if (isNaN(Number(dateSegments[1])) || dateSegments[1].length > 2) {
				return notFound();
			}
			break;
		case 3:
			mode = 'day';
			if (isNaN(Number(dateSegments[2])) || dateSegments[2].length > 2) {
				return notFound();
			}
			break;
	}

	const year = dateSegments[0];
	const month = dateSegments[1];
	const day = dateSegments[2];

	console.log({ dateSegments, year, month, day });

	if (dateSegments.length === 0 || isNaN(Number(year)) || year.length !== 4) {
		return notFound();
	}

	return (
		<div>
			<h1>InputDatePage</h1>
			<p>Mode: {mode}</p>
			<pre>{JSON.stringify({ year, month, day }, null, 2)}</pre>
		</div>
	);
}
