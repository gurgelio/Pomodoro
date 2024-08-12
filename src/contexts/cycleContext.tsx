import { type PropsWithChildren, createContext, useState } from "react";
import type { Cycle } from "../schemas/cycle";

interface CycleContextState {
	cycle: Cycle | null;
	cycleHistory: Cycle[];
}

interface StartCycleData {
	task: string;
	totalMinutes: number;
}

interface CycleContextActions {
	startCycle: (data: StartCycleData) => void;
	interruptCycle: () => void;
	finishCycle: () => void;
}

export const cycleContext = createContext(
	{} as CycleContextState & CycleContextActions,
);

export function CycleProvider({ children }: PropsWithChildren) {
	const [cycle, setCycle] = useState<Cycle | null>(null);
	const [cycleHistory, setCycleHistory] = useState<Cycle[]>([]);

	const startCycle = (data: StartCycleData) => {
		setCycle({
			...data,
			id: new Date().getTime().toString(),
			startDate: new Date(),
		});
	};

	const interruptCycle = () => {
		if (cycle == null) {
			return;
		}
		setCycleHistory((h) => [{ ...cycle, interruptedDate: new Date() }, ...h]);
		setCycle(null);
	};

	const finishCycle = () => {
		if (cycle == null) {
			return;
		}
		setCycleHistory((h) => [cycle, ...h]);
		setCycle(null);
	};

	return (
		<cycleContext.Provider
			value={{
				cycle,
				cycleHistory,
				startCycle,
				interruptCycle,
				finishCycle,
			}}
		>
			{children}
		</cycleContext.Provider>
	);
}
