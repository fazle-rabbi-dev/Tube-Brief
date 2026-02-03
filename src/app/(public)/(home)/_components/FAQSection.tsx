import { ChevronRight } from "lucide-react";

import { FAQ } from "../_constants";
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "@/components/ui/accordion";

const FAQSection = () => {
	return (
		<section className="container mt-20">
			<h2 className="heading-2 text-center mb-6">Frequently Asked Questions</h2>

			<Accordion
				className="flex w-full flex-col"
				transition={{ type: "spring", stiffness: 120, damping: 20 }}
				variants={{
					expanded: {
						opacity: 1,
						scale: 1,
					},
					collapsed: {
						opacity: 0,
						scale: 0.7,
					},
				}}>
				{FAQ?.map((item) => (
					<AccordionItem
						key={item.question}
						value={item.question}
						className="py-2">
						<AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
							<div className="flex items-center justify-between">
								<div className="ml-2 text-body">{item.question}</div>
								<ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 dark:text-zinc-50" />
							</div>
						</AccordionTrigger>
						<AccordionContent className="origin-left">
							<p className="mt-2 pl-6 pr-2  tracking-tight text-muted-foreground">
								{item.answer}
							</p>
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
			<br />
			<br />
		</section>
	);
};

export default FAQSection;
