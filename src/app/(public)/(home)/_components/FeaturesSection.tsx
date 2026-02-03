"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FEATURES } from "../_constants/index";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FeaturesSection = () => {
	useEffect(() => {
		AOS.init({
			duration: 900,
			easing: "ease-out-cubic",
		});
	}, []);

	return (
		<section id="features" className="mt-20 container scroll-mt-20 overflow-hidden">
			{/* ============= HEADER ============= */}
			<header className="text-center">
				<h2 className="text-primary text-lg">Features</h2>
				<h3 className="heading-2">
					Everything You Need to <span className="text-primary">Learn Smarter</span>
				</h3>
				<p className="mt-2 text-xsm">
					Powerful features designed to save you time and help you retain more information.
				</p>
			</header>

			{/* ============= FEATURE CARDS ============= */}
			<ul className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-5">
				{FEATURES.map((feature) => (
					<li
						// data-aos="zoom-out-right"
						data-aos={feature.animation}
						key={feature.title}
						className="">
						<Card className="h-full border-2 border-transparent hover:-translate-y-2 hover:border-primary transition-all duration-300">
							<CardHeader className="">
								<div className="w-fit p-2 bg-primary/10 rounded-md">
									<feature.icon className="text-primary" />
								</div>

								<CardTitle className="text-lg">{feature.title}</CardTitle>

								<CardDescription className="text-muted-foreground text-xsm">
									{feature.description}
								</CardDescription>
							</CardHeader>
						</Card>
					</li>
				))}
			</ul>
		</section>
	);
};

export default FeaturesSection;
