"use client";

import { cn, isMobileDevice } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	BrainCircuit,
	CircleUserRound,
	FileExclamationPoint,
	Home,
	LayoutDashboard,
	LucideIcon,
	Menu,
	Settings,
	Sparkles,
	X,
} from "lucide-react";
import { SignInButton, SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

type PropsType = {
	isSignedIn: Boolean;
	closeSidebar?: () => void;
};

const LOGGED_OUT_LINKS = [
	{ name: "Features", href: "/#features", Icon: Home, hash: true },
	{ name: "How it Works", href: "/#how-it-works", Icon: BrainCircuit, hash: true },
	{ name: "About", href: "/about", Icon: FileExclamationPoint },
];

const LOGGED_IN_LINKS = [
	{ name: "Dashboard", href: "/dashboard", Icon: LayoutDashboard },
	{ name: "Create Summary", href: "/dashboard/summaries/new", Icon: Sparkles },
	{ name: "Settings", href: "/dashboard/settings", Icon: Settings },
];

const NavLinks = ({ isSignedIn, closeSidebar }: PropsType) => {
	const pathname = usePathname();
	const PRESENT_LINKS = isSignedIn ? LOGGED_IN_LINKS : LOGGED_OUT_LINKS;

	return (
		<>
			{PRESENT_LINKS.map((item) => {
				const isActiveLink = pathname === item.href;

				return (
					<li
						key={item.name}
						className=""
						onClick={closeSidebar}>
						<Link
							href={item.href}
							className={cn(
								"text-sm flex items-center gap-x-2 text-muted-foreground hover:text-secondary hover:underline transition-all duration-500",
								isActiveLink && "text-secondary underline",
							)}>
							<span>{<item.Icon className="size-4 lg:hidden" />}</span>
							<span>{item.name}</span>
						</Link>
					</li>
				);
			})}

			<div className="lg:hidden">
				<SignedOut>
					<SignInButton mode="modal">
						<Button
							onClick={closeSidebar}
							variant="outline"
							className="w-full">
							Login
						</Button>
					</SignInButton>
				</SignedOut>
			</div>
		</>
	);
};

export default NavLinks;
