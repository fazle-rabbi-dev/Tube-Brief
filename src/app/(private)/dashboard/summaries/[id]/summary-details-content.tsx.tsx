import VideoSummary from "@/components/private/summaries/VideoSummary";
import { getSummaryById } from "@/lib/actions/summary.action";

const SummaryDetailsContent = async ({ params }: { params: Promise<{ id: string }> }) => {
	// await new Promise((resolve) => setTimeout(resolve, 4000));
	const { id } = await params;
	const summary = (await getSummaryById(id)) as any;

	if (!summary) {
		return <p className="text-center mt-3 text-base text-primary">Summary not found.</p>;
	}

	return (
		<div>
			<VideoSummary
				title={summary.title}
				videoUrl={summary.videoUrl}
				estimatedReadTime={summary.estimatedReadTimeMinutes}
				thumbnailUrl={summary.thumbnailUrl}
				summaryText={summary.summaryText}
			/>
		</div>
	);
};

export default SummaryDetailsContent;
