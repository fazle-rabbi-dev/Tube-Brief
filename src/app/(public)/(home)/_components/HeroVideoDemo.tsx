"use client";

import { useState } from "react";
import { Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const VIDEO_URL = "https://www.youtube.com/embed/EuvrYT9HrTk?si=NteyZPgXzwfRd0Bg";

const HeroVideoDemo = () => {
	const [showVideo, setShowVideo] = useState(false);

	return (
		<div
			id="video-demo"
			className="mt-10 w-full aspect-video border bg-dark/50 backdrop-blur-md rounded-lg p-3">
			<div className="relative w-full h-full flex-center">
				{/* Subtle gradient overlay */}
				<div className="rounded-lg absolute -z-10 inset-0 bg-linear-to-br from-primary/10 to-transparent" />

				{/* Play button */}
				<div
					className={cn(
						"flex flex-col gap-3 justify-center items-center",
						showVideo && "hidden",
					)}>
					<Button
						onClick={() => setShowVideo(true)}
						className="rounded-full animate-float"
						animate="scale">
						<Play />
					</Button>
					<p className="text-tiny">Interactive Demo Preview</p>
				</div>

				{/* Video iframe */}
				<iframe
					className={cn("hidden size-full", showVideo && "block")}
					src={VIDEO_URL}
					title="How TubeBrief works"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				/>
			</div>
		</div>
	);
};

export default HeroVideoDemo;
