import clsx from "clsx";
import { Play } from "phosphor-react";
import type { PropsWithChildren } from "react";

export function Home() {
	return (
		<main className="flex flex-col flex-1 items-center justify-center font-bold">
			<form className="flex flex-col items-center gap-14 ">
				<fieldset className="w-full flex items-center justify-center gap-2 text-lg flex-wrap">
					<label htmlFor="task">Vou trabalhar em</label>
					<input
						id="task"
						list="task-suggestions"
						className={clsx(
							"bg-transparent h-10 border-b-2 border-gray-500 px-2 flex-1 outline-none transition-colors",
							"hover:border-b-emerald-600",
							"placeholder:text-gray-500",
							"focus:border-b-emerald-600",
							"[&::-webkit-calendar-picker-indicator]:!hidden",
						)}
						placeholder="Dê um nome para o seu projeto"
					/>
					<datalist id="task-suggestions">
						<option value="Banana" />
						<option value="Maçã" />
					</datalist>

					<label htmlFor="minutesAmmount">durante</label>
					<input
						type="number"
						id="minutesAmmount"
						className="w-16 bg-transparent h-10 border-b-2 border-gray-500 px-2 outline-none transition-colors hover:border-b-emerald-600 placeholder:text-gray-500 focus:border-b-emerald-600"
						placeholder="00"
						step={5}
						min={5}
						max={60}
					/>
					<span>minutos.</span>
				</fieldset>

				<div className="font-mono text-[10rem] leading-[8rem] flex gap-4">
					<ClockDigit>0</ClockDigit>
					<ClockDigit>0</ClockDigit>
					<span className="py-8 text-emerald-600 flex justify-center overflow-hidden w-16 font-mono">
						:
					</span>
					<ClockDigit>0</ClockDigit>
					<ClockDigit>0</ClockDigit>
				</div>

				<button
					type="submit"
					className="w-full p-4 rounded-lg flex items-center justify-center cursor-pointer gap-2 bg-emerald-600 hover:bg-emerald-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
					disabled={true}
				>
					<Play size={24} />
					Começar
				</button>
			</form>
		</main>
	);
}

function ClockDigit({ children }: PropsWithChildren) {
	return <span className="bg-gray-700 px-4 py-8 rounded-lg">{children}</span>;
}
