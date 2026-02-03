import Link from "next/link";
import { Menu, X, PanelLeft } from "lucide-react";
import {
	SignedIn,
	SignedOut,
	SignInButton,
	SignOutButton,
	SignUpButton,
	UserButton,
} from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import ModeToggle from "./ModeToggle";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import NavLinks from "./NavLinks";
import LogoutButton from "@/components/ui/logout-button";
import MobileNav from "./MobileNav";

const Header = () => {
	return (
		<header
			className={cn("min-h-16 bg-background/70 backdrop-blur fixed z-50 top-0 left-0 right-0 ")}>
			{/* ============= Container ============= */}
			<div className="min-h-16 h-full max-w-[1200px] mx-auto flex items-center justify-between px-4 md:px-10 xl:px-0">
				{/* ============= Left Side (Logo) ============= */}
				<div className="">
					<SignedIn>
						<Link
							href="/dashboard"
							className="group">
							<Logo />
						</Link>
					</SignedIn>

					<SignedOut>
						<Link
							href="/"
							className="group">
							<Logo />
						</Link>
					</SignedOut>
				</div>

				{/* ============= Center Desktop Navigation (Important: use absolute position to place it at center) ============= */}
				<nav className="hidden lg:block absolute left-1/2 -translate-x-1/2 ">
					<ul className="flex gap-4">
						<SignedIn>
							<NavLinks isSignedIn />
						</SignedIn>

						<SignedOut>
							<NavLinks isSignedIn={false} />
						</SignedOut>
					</ul>
				</nav>

				{/* ============= Actions (Right Side) ============= */}
				<div className="flex items-center gap-2">
					{/* ============= Auth buttons + User button ============= */}
					<div className="hidden md:flex gap-2 items-center">
						<SignedOut>
							<SignInButton mode="modal">
								<Button variant="ghost">Login</Button>
							</SignInButton>
							<SignUpButton mode="modal">
								<Button>Get Started</Button>
							</SignUpButton>
						</SignedOut>
						<SignedIn>
							<SignOutButton>
								<LogoutButton>Logout</LogoutButton>
							</SignOutButton>
							<div className="size-10 flex-center">
								<UserButton
									appearance={{
										elements: {
											avatarBox: "ring-2 ring-primary/20 dark:ring-secondary/20",
										},
									}}
								/>
							</div>
						</SignedIn>
					</div>

					{/* ============= Theme Mode Toggle ============= */}
					<ModeToggle />


					{/* ============= Mobile Navigation ============= */}
					<MobileNav />
				</div>
			</div>
		</header>
	);
};

export default Header;
