import { Suspense } from "react";
import type { Metadata, ResolvingMetadata } from "next";

import { getSummaryById } from "@/lib/actions/summary.action";
import SummarySkeleton from "@/components/private/summaries/SummarySkeleton";
import SummaryDetailsContent from "./summary-details-content.tsx";
import { METADATA } from "@/lib/constants/METADATA";

type Props = {
	params: Promise<{ id: string }>;
};

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const id = (await params).id;

	// fetch summary
	const summary = await getSummaryById(id);

	return {
		title: summary?.title || "Summary details - Tube-Brief",
		description: METADATA.summaryDetails.description,
	};
}

const SummaryDetailsPage = ({ params }: { params: Promise<{ id: string }> }) => {
	return (
		<main className="container mt-4">
			<h2 className="heading-2 text-center">Video Summary</h2>

			<Suspense fallback={<SummarySkeleton parent="summary_details" />}>
				<SummaryDetailsContent params={params} />
			</Suspense>
		</main>
	);
};

export default SummaryDetailsPage;
