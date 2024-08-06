export interface Cycle {
	id: string;
	task: string;
	totalMinutes: number;
	startDate: Date;
	interruptedDate?: Date;
}
