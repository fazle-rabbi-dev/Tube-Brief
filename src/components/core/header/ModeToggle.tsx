"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ModeToggle() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted)
		return (
			<Button
				variant="ghost"
				className="opacity-0">
				<Sun className="size-6" />
			</Button>
		);

	return (
		<Button
			variant="ghost"
			className="rounded-full border size-8"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
			{theme === "dark" ? <Sun className="" /> : <Moon className="" />}
		</Button>
	);
}
