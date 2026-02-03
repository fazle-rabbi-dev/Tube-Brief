import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CTASection = () => {
	return (
		<section className="mt-20 container">
			<div className="p-10 rounded-2xl border">
				<header className="text-center space-y-2">
					<h2 className="heading-2">
						Ready to Save Hours <span className="gradient-text">Every Week?</span>
					</h2>
					<p className="sm:max-w-[60%] mx-auto text-sm">
						Join over 150,000 professionals who use TubeBrief to learn faster, retain more,
						and stay ahead. Start your free trial today.
					</p>
				</header>

				<div className="mt-6 flex flex-col sm:flex-row sm:justify-center items-center gap-4">
					<Button
						size="lg"
						className="flex items-center gap-2">
						<span>
							<Play />
						</span>
						<Link href="/sign-in">Start Free Trial</Link>
					</Button>
					<Button
						variant="outline"
						size="lg"
						className="flex items-center gap-2">
						<Link href="/about">Learn More</Link>
						<span>
							<ArrowRight />
						</span>
					</Button>
				</div>
				<p className="mt-2 text-center text-xs">It's free forever no need to pay money.</p>
			</div>
		</section>
	);
};

export default CTASection;
