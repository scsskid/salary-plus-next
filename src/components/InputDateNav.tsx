import { useInputDate } from '@/lib/hooks/useInputDateContext';

type Props = {};
export default function InputDateNav({}: Props) {
	const { inputDate, setInputDate } = useInputDate();

	return (
		<div className="input-date-nav">
			<nav>
				<button
					onClick={() => {
						setInputDate(
							new Date(inputDate.getFullYear(), inputDate.getMonth() - 1, 1)
						);
					}}
				>
					Previous Month
				</button>
				<button
					onClick={() => {
						setInputDate(
							new Date(inputDate.getFullYear(), inputDate.getMonth() + 1, 1)
						);
					}}
				>
					Next Month
				</button>

				<button
					onClick={() => {
						setInputDate(new Date());
					}}
				>
					Today
				</button>
			</nav>
			<p>
				{inputDate.toLocaleDateString('default', { month: 'long' })}{' '}
				{inputDate.getFullYear()}
				<br />
				inputDate:{' '}
				<b>
					{inputDate.toLocaleDateString('default', {
						day: 'numeric',
						month: 'short',
						year: 'numeric',
					})}
				</b>
			</p>
		</div>
	);
}
