import { ArrowRight } from "lucide-react";
import { WORKFLOW_STEPS } from "../_constants";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const HowItWorksSection = () => {
	return (
		<section id="how-it-works" className="mt-20 container lg:max-w-7xl lg:px-6 scroll-mt-20">
			<header className="text-center">
				<h2 className="text-primary text-lg">How It Works</h2>
				<h3 className="heading-2">
					Three Simple Steps to <span className="text-primary">Save Hours</span>
				</h3>
				<p className="mt-2 text-xsm">
					No complex setup required. Start summarizing videos in under a minute.
				</p>
			</header>

			{/* ============= WORKFLOW_STEPS ============= */}
			<ul className="mt-8 grid grid-cols-1 md:grid-cols-3 items-center gap-3">
				{WORKFLOW_STEPS?.map((step, index) => (
					<li
						key={step.title}
						className="relative">
						<Card>
							<CardHeader className="">
								{/* Step Number */}
								<div className="absolute right-4 top-2 heading-1 font-bold text-primary/50">
									{step.number}
								</div>

								{/* Arrow indicator */}
								<div className="hidden lg:block absolute top-1/2 -right-4">
									{index < WORKFLOW_STEPS.length - 1 && (
										<ArrowRight className="w-8 h-8 text-primary/50" />
									)}
								</div>

								<div className="w-fit p-3 rounded-md bg-primary/10 text-primary">
									<step.icon />
								</div>

								<CardTitle className="text-lg">{step.title}</CardTitle>
								<CardDescription>{step.description}</CardDescription>
							</CardHeader>
						</Card>
					</li>
				))}
			</ul>
		</section>
	);
};

export default HowItWorksSection;
