"use client";

import { ReactNode, useEffect, useRef } from "react";
import { annotate } from "rough-notation";

type NoteProps = {
	children: ReactNode;
	variant?: "underline" | "circle";
	className?: string;
};

export default function Note({ children, variant = "underline", className }: NoteProps) {
	const element = useRef<HTMLElement | null>(null);

	useEffect(() => {
		if (!element.current) return;

		const note = annotate(element.current, {
			type: variant,
			color: "#D6453D",
			strokeWidth: 1,
			padding: 3
		});

		note.show();
	}, []);

	return (
		<span
			className={`${className} mx-2 hidden sm:inline-block`}
			ref={element}>
			{children}
		</span>
	);
}
