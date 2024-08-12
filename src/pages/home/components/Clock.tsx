import { differenceInSeconds } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { cycleContext } from "../../../contexts/cycleContext";

export function Clock() {
	const { cycle, finishCycle } = useContext(cycleContext);
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
				finishCycle();
				clearInterval(interval);
			}

			setSecondsLeft(cycle.totalMinutes * 60 - secondsElapsed - 1);
		}, 1000);

		return () => clearInterval(interval);
	}, [cycle, finishCycle]);

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
