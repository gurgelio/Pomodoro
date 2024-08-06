import { differenceInSeconds } from "date-fns";
import { type Dispatch, type SetStateAction, useEffect, useState } from "react";
import type { Cycle } from "../../../schemas/cycle";

interface ClockProps {
	cycle: Cycle | null;
	setCycle: Dispatch<SetStateAction<Cycle | null>>;
	setCycleHistory: Dispatch<SetStateAction<Cycle[]>>;
}

export function Clock({ cycle, setCycleHistory, setCycle }: ClockProps) {
	const [secondsLeft, setSecondsLeft] = useState(0);
	const seconds = (secondsLeft % 60).toString().padStart(2, "0");
	const minutes = Math.floor(secondsLeft / 60)
		.toString()
		.padStart(2, "0");

	useEffect(() => {
		if (cycle == null) {
			setSecondsLeft(0);
			return;
		}

		setSecondsLeft(
			cycle.totalMinutes * 60 -
				differenceInSeconds(new Date(), cycle.startDate) -
				1,
		);
		const interval = setInterval(() => {
			const secondsElapsed = differenceInSeconds(new Date(), cycle.startDate);
			if (secondsElapsed <= 0) {
				setCycleHistory((c) => [...c, cycle]);
				setCycle(null);
				clearInterval(interval);
			}

			setSecondsLeft(cycle.totalMinutes * 60 - secondsElapsed - 1);
		}, 1000);

		return () => clearInterval(interval);
	}, [cycle, setCycle, setCycleHistory]);

	useEffect(() => {
		if (secondsLeft <= 0) {
			document.title = "Pomodoro";
			return;
		}
		document.title = `Pomodoro: ${minutes}:${seconds}`;
	}, [minutes, seconds, secondsLeft]);

	return (
		<div className="font-mono text-[10rem] leading-[8rem] flex gap-4">
			<span className="bg-gray-700 px-4 py-8 rounded-lg">{minutes[0]}</span>
			<span className="bg-gray-700 px-4 py-8 rounded-lg">{minutes[1]}</span>
			<span className="py-8 text-emerald-600 flex justify-center overflow-hidden w-16 font-mono">
				:
			</span>
			<span className="bg-gray-700 px-4 py-8 rounded-lg">{seconds[0]}</span>
			<span className="bg-gray-700 px-4 py-8 rounded-lg">{seconds[1]}</span>
		</div>
	);
}
