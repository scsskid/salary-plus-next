/* @ts-ignore */

export const updatedSampleDataRecords = shiftRecordsDates({
	records: sampleData.records,
	summand: 40,
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

export const updatedSampleJobs = sampleData.jobs.map((entry) => {
	return {
		id: entry.id,
		title: entry.name,
		simple_wage: entry.rate,
		user_id: 1,
		day_hours: entry.dayHours,
	};
});
