import { Play, Sparkle } from "lucide-react";

import { HERO_INSIGHTS } from "../_constants/index";
import { Button } from "@/components/ui/button";
import Note from "@/components/shared/Note";
import CountUp from "./CountUp";
import HeroVideoDemo from "./HeroVideoDemo";
import CursorEffect from "./CursorEffect";
import Link from "next/link";
import DashedGridTop from "./DashedGridTop";

const HeroSection = () => {
	return (
		<section className="relative container">
			{/* Effects */}
			<CursorEffect />
			<DashedGridTop />

			{/* Main Container */}
			<div className="container mx-auto flex flex-col justify-center items-center text-center">
				{/* ============= TAGLINE ============= */}
				<div className="flex items-center gap-2 rounded-full bg-muted text-muted-foreground px-4 py-2 border">
					<span>
						<Sparkle />
					</span>
					<span className="animate-in blur-in duration-700">Powered by Advanced AI</span>
				</div>

				{/* ============= HEADER ============= */}
				<header className="flex flex-col items-center">
					<h1 className="mt-3 heading-1">
						Turn Hours of Videos into <br />{" "}
						<span className="gradient-text">Minutes of Insights</span>
					</h1>

					<p className="my-4 text-muted-foreground text-body max-w-lg">
						TubeBrief uses cutting-edge AI to instantly summarize any YouTube video.{" "}
						<Note>Save time</Note>, learn faster, and never miss key information again.
					</p>

					{/* ============= CTA ============= */}
					<div className="flex flex-col md:flex-row gap-4">
						<Button animate="scale">
							<Play />
							<Link href="/sign-in">Start summarizing for free</Link>
						</Button>
						<Button
							variant="outline"
							animate="scale">
							<Play />
							Watch demo
						</Button>
					</div>
				</header>

				{/* ============= INSIGHTS ============= */}
				<div className="w-full mt-10 grid grid-cols-1 md:grid-cols-3 gap-2">
					{HERO_INSIGHTS.map((item) => (
						<div
							className=""
							key={item.amount}>
							<h2 className="text-lg flex items-center justify-center">
								<CountUp
									end={item.amount}
									suffix={item.suffix}
								/>
							</h2>

							<p>{item.content}</p>
						</div>
					))}
				</div>

				<HeroVideoDemo />
			</div>
		</section>
	);
};

export default HeroSection;
