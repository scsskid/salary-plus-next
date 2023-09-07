import {
	filterEntriesByBegin,
	isSameMonth,
	getDateDifferenceInHouse,
} from '@/lib/helpers';
import { Job, WorkingEntryWithJob } from '@/types/entries';

type ReportProps = {
	entries: WorkingEntryWithJob[];
	jobs: Job[];
	inputDate: Date;
};

export default function ReportBody({
	entries,
	jobs,
	inputDate = new Date(),
}: ReportProps) {
	const entriesOfMonth = filterEntriesByBegin(entries, inputDate, isSameMonth);

	function getTotals(jobs: []) {
		return jobs.reduce(
			(acc, job) => {
				const { id, simple_wage } = job;
				// @ts-ignore
				const hours = getTotalHoursWorkedByJob(entriesOfMonth, id);
				return {
					hours: acc.hours + hours,
					wage: acc.wage + hours * simple_wage,
				};
			},
			{ hours: 0, wage: 0 }
		);
	}

	function getReport() {
		return jobs.map((job) => {
			const { id, simple_wage } = job;
			// @ts-ignore
			const hours = getTotalHoursWorkedByJob(entriesOfMonth, id);

			return {
				id,
				hours,
				wage: hours * simple_wage,
			};
		});
	}

	return (
		<div>
			<h3>Total</h3>
			{/* @ts-ignore  */}
			<p>Hous Worked: {getTotals(jobs).hours} h</p>

			<h3>By Job</h3>
			{jobs.map((job) => (
				<div key={job.id}>
					<p>{job.title}</p>
					<p>{getReport().find((el) => el.id === job.id)?.hours} h</p>
					<p>{getReport().find((el) => el.id === job.id)?.wage} €</p>
				</div>
			))}
		</div>
	);
}

function getTotalHoursWorkedByJob(
	entriesOfMonth: WorkingEntryWithJob[],
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
