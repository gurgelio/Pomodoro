import type { ComponentProps } from "react";
import { cn } from "../../utils/cn";

export function History() {
	return (
		<main className="flex flex-1 p-14 flex-col">
			<h1>Meu histórico</h1>
			<div className="flex-1 overflow-auto mt-8">
				<table className="w-full border-collapse min-w-[600px] text-sm">
					<thead>
						<tr className="text-left">
							<Th>Tarefa</Th>
							<Th>Duração</Th>
							<Th>Início</Th>
							<Th>Status</Th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<Td>Tarefa</Td>
							<Td>20 minutos</Td>
							<Td>Há cerca de 2 meses</Td>
							<Td>
								<Status statusColor="green">Concluído</Status>
							</Td>
						</tr>
						<tr>
							<Td>Tarefa</Td>
							<Td>20 minutos</Td>
							<Td>Há cerca de 2 meses</Td>
							<Td>
								<Status statusColor="green">Concluído</Status>
							</Td>
						</tr>
						<tr>
							<Td>Tarefa</Td>
							<Td>20 minutos</Td>
							<Td>Há cerca de 2 meses</Td>
							<Td>
								<Status statusColor="green">Concluído</Status>
							</Td>
						</tr>
						<tr>
							<Td>Tarefa</Td>
							<Td>20 minutos</Td>
							<Td>Há cerca de 2 meses</Td>
							<Td>
								<Status statusColor="green">Concluído</Status>
							</Td>
						</tr>
						<tr>
							<Td>Tarefa</Td>
							<Td>20 minutos</Td>
							<Td>Há cerca de 2 meses</Td>
							<Td>
								<Status statusColor="green">Concluído</Status>
							</Td>
						</tr>
						<tr>
							<Td>Tarefa</Td>
							<Td>20 minutos</Td>
							<Td>Há cerca de 2 meses</Td>
							<Td>
								<Status statusColor="green">Concluído</Status>
							</Td>
						</tr>
						<tr>
							<Td className="rounded-bl-lg">Tarefa</Td>
							<Td>20 minutos</Td>
							<Td>Há cerca de 2 meses</Td>
							<Td className="rounded-br-lg">
								<Status statusColor="green">Concluído</Status>
							</Td>
						</tr>
					</tbody>
				</table>
			</div>
		</main>
	);
}

interface StatusProps extends ComponentProps<"span"> {
	statusColor: "red" | "yellow" | "green";
}

function Status({ statusColor, ...props }: StatusProps) {
	return (
		<span
			{...props}
			className={cn(
				"flex items-center gap-2 before:size-2 before:rounded-full",
				{
					"before:bg-yellow-500": statusColor === "yellow",
					"before:bg-green-500": statusColor === "green",
					"before:bg-red-500": statusColor === "red",
				},
			)}
		/>
	);
}

function Th({ className, ...rest }: ComponentProps<"th">) {
	return (
		<th
			className={cn(
				"bg-gray-600 p-4 first:pl-6 first:rounded-tl-lg last:pr-6 last:rounded-tr-lg",
				className,
			)}
			{...rest}
		/>
	);
}

function Td({ className, ...rest }: ComponentProps<"td">) {
	return (
		<td
			className={cn(
				"bg-gray-700 border-t-4 border-gray-800 p-4 text-sm/relaxed first:pl-6 last:pr-6 first:w-1/2",
				className,
			)}
			{...rest}
		/>
	);
}
