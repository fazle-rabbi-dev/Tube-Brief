"use client";

import { useActionState } from "react";
import { getSummary } from "@/lib/api/getSummary";
import VideoInput from "@/components/private/summaries/VideoInput";
import VideoSummary from "@/components/private/summaries/VideoSummary";
import SummarySkeleton from "@/components/private/summaries/SummarySkeleton";
import { toast } from "sonner";

type SummaryState = {
	title: string;
	thumbnailUrl: string;
	videoUrl: string;
	estimatedReadTime: string;
	summaryText: string;
	error: {
		state: boolean;
		message: string;
	};
};

const NewSummaryContent = () => {
	// =============== CREATE VIDEO SUMMARY ===============
	const createSummary = async (state: SummaryState, formData: FormData): Promise<SummaryState> => {
		const videoUrl = String(formData.get("videoUrl"));

		// generate summary using transcript api + gemini
		const response = await getSummary(videoUrl);

		if (!response.success) {
			toast.error(response.error);

			return {
				...state,
				error: {
					state: true,
					message: response.error,
				},
			};
		}

		const { title, thumbnailUrl, estimatedReadTime, summaryText } = response.data;

		return {
			title,
			thumbnailUrl,
			videoUrl,
			estimatedReadTime,
			summaryText,
			error: {
				state: false,
				message: "",
			},
		};
	};

	// =============== HANDLE FORM SUBMISSION ===============
	const [state, formAction, isPending] = useActionState(createSummary, {
		title: "",
		thumbnailUrl: "",
		videoUrl: "",
		estimatedReadTime: "",
		summaryText: "",
		error: {
			state: false,
			message: "",
		},
	});

	return (
		<main className="container mt-4">
			<h1 className="heading-1 text-center mb-6 gradient-text">Summarize Video</h1>

			{/* Video url input */}
			<VideoInput formAction={formAction} />

			{/* Skeleton loader */}
			{isPending && <SummarySkeleton />}

			{!isPending && state.error.state && (
				<p className="mt-6 text-red-500 font-bold text-lg font-mono text-center italic">
					{state.error.message}
				</p>
			)}

			{/* Video summary */}
			{!isPending && state.summaryText.length > 0 && <VideoSummary {...state} />}
		</main>
	);
};

export default NewSummaryContent;
