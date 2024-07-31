import { Scroll, Timer } from "phosphor-react";
import type { ComponentProps, PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";
import igniteLogo from "../assets/ignite-logo.svg";

export function Header() {
	return (
		<header className="flex items-center justify-between">
			<img src={igniteLogo} alt="" />
			<nav className="flex gap-2">
				<HeaderLink to="/" title="Timer">
					<Timer size={24} />
				</HeaderLink>
				<HeaderLink to="/history" title="Histórico">
					<Scroll size={24} />
				</HeaderLink>
			</nav>
		</header>
	);
}

function HeaderLink({
	children,
	...rest
}: PropsWithChildren<ComponentProps<typeof NavLink>>) {
	return (
		<NavLink
			className="size-12 flex justify-center items-center text-gray-100 border-t-[3px] border-b-[3px] border-transparent hover:border-b-emerald-500 transition-colors aria-[current]:text-emerald-500"
			{...rest}
		>
			{children}
		</NavLink>
	);
}
