import {
	filterEntriesByBegin,
	isSameMonth,
	getDateDifferenceInHouse,
} from '@/lib/helpers';
import { useInputDate } from '@/lib/hooks/useInputDateContext';
import { WorkingEntriesList } from '@/types/entries';
import { Props } from './Report';

export default function ReportBody({ entries, jobs }: Props) {
	const { inputDate } = useInputDate();
	const entriesOfMonth = filterEntriesByBegin(entries, inputDate, isSameMonth);

	function getTotalHoursWorkedByJob(
		entriesOfMonth: WorkingEntriesList,
		jobId: number
	) {
		return entriesOfMonth.reduce((acc, entry) => {
			const { begin, end, job_id } = entry;

			if (job_id !== jobId) {
				return acc;
			}

			const hours = getDateDifferenceInHouse(new Date(begin), new Date(end));
			return acc + hours;
		}, 0);
	}

	function getTotalHoursWorked(jobs: []) {
		return jobs.reduce((acc, job) => {
			const { id } = job;
			const hours = getTotalHoursWorkedByJob(entriesOfMonth, id);
			return acc + hours;
		}, 0);
	}

	console.log('hoursByJob', getTotalHoursWorkedByJob(entriesOfMonth, 1));
	console.log('hoursByJob', getTotalHoursWorkedByJob(entriesOfMonth, 2));
	console.log('hoursByJob', getTotalHoursWorkedByJob(entriesOfMonth, 3));
	console.log('total', getTotalHoursWorked(jobs));

	return (
		<div>
			<h3>Total</h3>
			<p>Hous Worked: {getTotalHoursWorked(jobs)}</p>

			<h3>By Job</h3>
			{jobs.map((job) => (
				<div key={job.id}>
					<p>{job.title}</p>
					<p>{getTotalHoursWorkedByJob(entriesOfMonth, job.id)}</p>
				</div>
			))}
		</div>
	);
}
