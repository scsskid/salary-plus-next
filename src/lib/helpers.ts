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
