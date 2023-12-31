import '@/css/components/InputDateNav.css';
import Link from 'next/link';

type Props = {
	inputDate: Date;
	basePath?: string;
};
export default function InputDateNav({
	inputDate = new Date(),
	basePath = '/calendar',
}: Props) {
	const prevMonthRoute = `${basePath}/${getDateString(
		getMonthDate(inputDate, -1)
	)}`;
	const nextMonthRoute = `${basePath}/${getDateString(
		getMonthDate(inputDate, 1)
	)}`;

	return (
		<div>
			<nav className="input-date-nav">
				<Link className="ui-btn" href={prevMonthRoute}>
					Previous Month
				</Link>

				<Link className="ui-btn" href={nextMonthRoute}>
					Next Month
				</Link>

				{basePath === '/calendar' && (
					<Link className="ui-btn" href="/calendar">
						Today
					</Link>
				)}
			</nav>

			<h3>
				{inputDate.toLocaleDateString('default', { month: 'long' })}{' '}
				{inputDate.getFullYear()}
			</h3>
			<p>
				(inputDate:{' '}
				{inputDate.toLocaleDateString('default', {
					day: 'numeric',
					month: 'short',
					year: 'numeric',
				})}
				)
			</p>
		</div>
	);
}

function getMonthDate(inputDate: Date, shift: number) {
	// get next month and set date to 1
	const month = new Date(inputDate);
	month.setMonth(month.getMonth() + shift);
	month.setDate(1);
	return month;
}

export function getDateString(date: Date) {
	const returnDate = new Date(date);
	const year = returnDate.getFullYear();
	const month = returnDate.getMonth() + 1;
	const day = returnDate.getDate();
	return `${year}/${month}/${day}`;
}
