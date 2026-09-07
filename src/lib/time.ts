export const MINUTE = 60_000;
export const SECOND = 1_000;

export function timeToMinutes(value: string): number | null {
	const match = /^([01]\d|2[0-3]):([0-5]\d)$/.exec(value);

	if (!match) {
		return null;
	}

	return Number(match[1]) * 60 + Number(match[2]);
}

export function getEndTimestamp(start: string, work: string, breakDuration: string): number | null {
	const startMinutes = timeToMinutes(start);
	const workMinutes = timeToMinutes(work);
	const breakMinutes = timeToMinutes(breakDuration);

	if (startMinutes === null || workMinutes === null || breakMinutes === null) {
		return null;
	}

	const now = new Date();
	const startTime = new Date(
		now.getFullYear(),
		now.getMonth(),
		now.getDate(),
		0,
		startMinutes,
		0,
		0,
	);

	return startTime.getTime() + (workMinutes + breakMinutes) * MINUTE;
}

export function formatClock(milliseconds: number): string {
	const totalSeconds = Math.max(0, Math.floor(milliseconds / SECOND));
	const hours = Math.floor(totalSeconds / 3600);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const seconds = totalSeconds % 60;

	return [hours, minutes, seconds].map((unit) => String(unit).padStart(2, '0')).join(':');
}

export function formatTime(timestamp: number): string {
	return new Intl.DateTimeFormat('es-ES', {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false,
	}).format(timestamp);
}
