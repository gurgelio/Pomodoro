import { createContext } from "react";
import type { Cycle } from "../../schemas/cycle";

interface CycleContextState {
	cycle: Cycle | null;
	cycleHistory: Cycle[];
}

interface CycleContextActions {
	startCycle: (data: { task: string; totalMinutes: number }) => void;
	interruptCycle: () => void;
	finishCycle: () => void;
}

export const cycleContext = createContext(
	{} as CycleContextState & CycleContextActions,
);
