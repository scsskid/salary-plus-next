import { sampleData } from './data';

export function formatWithTwoDecimals(num: number) {
	return (Math.round(num * 100) / 100).toFixed(2);
}

export function getDateDifferenceInHouse(date1: Date, date2: Date) {
	const differenceInTime = date2.getTime() - date1.getTime();
	const differenceInHours = differenceInTime / (1000 * 60 * 60);
	return differenceInHours;
}

export function getDefaultValueForInputDateTimeLocal(date: Date): string {
	date.setMilliseconds(0);
	date.setSeconds(0);
	return date.toISOString().slice(0, -1);
}

export function calculateWage(
	hourlyWage: number,
	begin: Date,
	end: Date
): number {
	const differenceInHours = getDateDifferenceInHouse(begin, end);
	return hourlyWage * differenceInHours;
}

export function isSameDay(date1: Date, date2: Date) {
	return (
		date1.getDate() === date2.getDate() &&
		date1.getMonth() === date2.getMonth() &&
		date1.getFullYear() === date2.getFullYear()
	);
}

export function filterEntriesByDate(entries, date) {
	return entries.filter((entry) => {
		return isSameDay(new Date(entry.begin), date);
	});
}

export const updatedSampleJobs = sampleData.jobs.map((entry) => {
	return {
		id: entry.id,
		title: entry.name,
		simple_wage: entry.rate,
		user_id: 1,
		day_hours: entry.dayHours,
	};
});

export const updatedSampleDataRecords = shiftRecordsDates({
	records: sampleData.records,
	summand: 44,
}).map((entry) => {
	return {
		begin: entry.begin,
		end: entry.end,
		sick_leave: entry.sickLeave ? true : false,
		user_id: 1,
		job_id: entry.jobId,
	};
});

export function shiftRecordsDates({ records = [], summand = 0 }) {
	const shiftMonths = (record) => {
		const beginCopy = new Date(record.begin);
		const endCopy = new Date(record.end);

		beginCopy.setMonth(beginCopy.getMonth() + summand);
		endCopy.setMonth(endCopy.getMonth() + summand);

		return {
			...record,
			begin: beginCopy.toISOString(),
			end: endCopy.toISOString(),
		};
	};

	return records.map(shiftMonths);
}
