import { type PropsWithChildren, useEffect, useState } from "react";
import { cycleContext } from ".";
import type { Cycle } from "../../schemas/cycle";

interface StartCycleData {
  task: string;
  totalMinutes: number;
}

const storageKeys = {
  cycle: "@pomodoro.gurgel.io:cycle-v1",
  cycleHistory: "@pomodoro.gurgel.io:history-v1",
};

export function CycleProvider({ children }: PropsWithChildren) {
  const [cycle, setCycle] = useState<Cycle | null>(() => {
    const cycleJson = localStorage.getItem(storageKeys.cycle);
    if (cycleJson == null) {
      return null;
    }
    return JSON.parse(cycleJson) as Cycle;
  });

  const [cycleHistory, setCycleHistory] = useState<Cycle[]>(() => {
    const historyJson = localStorage.getItem(storageKeys.cycleHistory);
    if (historyJson == null) {
      return [];
    }
    return JSON.parse(historyJson) as Cycle[];
  });

  useEffect(() => {
    localStorage.setItem(storageKeys.cycle, JSON.stringify(cycle));
  }, [cycle]);

  useEffect(() => {
    localStorage.setItem(
      storageKeys.cycleHistory,
      JSON.stringify(cycleHistory),
    );
  }, [cycleHistory]);

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
