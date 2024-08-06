import { HandPalm, Play } from "phosphor-react";
import { useState } from "react";
import {} from "react-hook-form";
import type { Cycle } from "../../schemas/cycle";
import { Clock } from "./components/Clock";
import { Form } from "./components/Form";

export function Home() {
	const [cycleHistory, setCycleHistory] = useState<Cycle[]>([]);
	const [cycle, setCycle] = useState<Cycle | null>(null);

	const stopCycle = () => {
		if (cycle == null) {
			return;
		}

		setCycleHistory((state) => [
			...state,
			{ ...cycle, interruptedDate: new Date() },
		]);
		setCycle(null);
	};

	return (
		<main className="flex flex-col flex-1 items-center justify-center font-bold gap-14">
			<Form formId="form" cycle={cycle} setCycle={setCycle} />

			<Clock
				cycle={cycle}
				setCycle={setCycle}
				setCycleHistory={setCycleHistory}
			/>

			{cycle == null ? (
				<button
					type="submit"
					form="form"
					className="max-w-xl w-full p-4 rounded-lg flex items-center justify-center cursor-pointer gap-2 bg-emerald-600 hover:bg-emerald-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
				>
					<Play size={24} />
					Começar
				</button>
			) : (
				<button
					type="button"
					className="max-w-xl w-full p-4 rounded-lg flex items-center justify-center cursor-pointer gap-2 bg-amber-700 hover:bg-amber-800 transition-colors"
					onClick={stopCycle}
				>
					<HandPalm size={24} /> Interromper
				</button>
			)}
		</main>
	);
}
