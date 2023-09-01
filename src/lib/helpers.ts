export function formatWithTwoDecimals(num: number) {
	return (Math.round(num * 100) / 100).toFixed(2);
}

export function getDateDifferenceInHouse(date1: Date, date2: Date) {
	const differenceInTime = date2.getTime() - date1.getTime();
	const differenceInHours = differenceInTime / (1000 * 60 * 60);
	return differenceInHours.toFixed(2);
}

export function getDefaultValueForInputDateTimeLocal(date: Date): string {
	date.setMilliseconds(0);
	date.setSeconds(0);
	return date.toISOString().slice(0, -1);
}
