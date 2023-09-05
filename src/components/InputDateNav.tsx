import { useInputDate } from '@/lib/hooks/useInputDateContext';

import '@/css/components/InputDateNav.css';

type Props = {};
export default function InputDateNav({}: Props) {
	const { inputDate, setInputDate } = useInputDate();

	return (
		<div>
			<nav className="input-date-nav">
				<button
					className="ui-btn"
					onClick={() => {
						setInputDate(
							new Date(inputDate.getFullYear(), inputDate.getMonth() - 1, 1)
						);
					}}
				>
					Previous Month
				</button>
				<button
					className="ui-btn"
					onClick={() => {
						setInputDate(
							new Date(inputDate.getFullYear(), inputDate.getMonth() + 1, 1)
						);
					}}
				>
					Next Month
				</button>

				<button
					className="ui-btn"
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
