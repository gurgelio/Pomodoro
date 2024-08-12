import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cycleContext } from "../../../contexts/cycleContext";

interface FormProps {
	formId: string;
}

const formSchema = z.object({
	task: z.string().min(1, "Informe o nome da tarefa"),
	totalMinutes: z
		.number()
		.positive("O tempo deve ser maior que zero!")
		.int("O tempo deve ser um número inteiro!")
		.min(5, "O tempo deve ser maior que 5 minutos")
		.max(60, "O tempo não deve passar de 60 minutos"),
});

type FormSchema = z.infer<typeof formSchema>;

export function Form({ formId }: FormProps) {
	const { startCycle, cycle } = useContext(cycleContext);
	const { register, handleSubmit, reset } = useForm<FormSchema>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			task: "",
			totalMinutes: 0,
		},
	});

	const handleNewCycle = handleSubmit((data) => {
		startCycle(data);
		reset();
	});

	return (
		<form
			onSubmit={handleNewCycle}
			id={formId}
			className="flex items-center justify-center gap-2 text-lg flex-wrap"
		>
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
				disabled={cycle != null}
				placeholder="Dê um nome para o seu projeto"
				{...register("task")}
			/>
			<datalist id="task-suggestions">
				<option value="Banana" />
				<option value="Maçã" />
			</datalist>

			<label htmlFor="totalMinutes">durante</label>
			<input
				type="number"
				id="totalMinutes"
				className="w-16 bg-transparent h-10 border-b-2 border-gray-500 px-2 outline-none transition-colors hover:border-b-emerald-600 placeholder:text-gray-500 focus:border-b-emerald-600"
				placeholder="00"
				disabled={cycle != null}
				step={5}
				{...register("totalMinutes", {
					valueAsNumber: true,
					max: 60,
					min: 5,
				})}
			/>
			<span>minutos.</span>
		</form>
	);
}
