import { GoogleGenAI } from "@google/genai";

import { constractAiPrompt, getYouTubeVideoId, Localstorage, logger } from "@/lib/utils";
import { getTranscript } from "./getTranscript";
import { saveSummary } from "../actions/summary.action";

type SummarySuccess = {
	success: true;
	data: {
		title: string;
		thumbnailUrl: string;
		videoUrl: string;
		estimatedReadTime: string;
		summaryText: string;
	};
};

type SummaryFail = {
	success: false;
	error: string;
};

type SummaryResult = SummarySuccess | SummaryFail;

export const getSummary = async (videoUrl: string): Promise<SummaryResult> => {
	try {
		// validate video url
		if (!videoUrl || videoUrl.trim().length === 0) {
			throw new Error("Invalid video url.");
		}

		const videoId = getYouTubeVideoId(videoUrl);
		if (!videoId) throw new Error("Invalid video url.");

		const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

		// fetch transcript
		const transcript = await getTranscript(videoId);

		// initialize gemini
		const ai = new GoogleGenAI({
			apiKey: Localstorage.geminiApiKey as string,
		});

		const response = await ai.models.generateContent({
			model: "gemini-2.5-flash",
			contents: constractAiPrompt(transcript),
		});

		if (!response.text) {
			throw new Error("Gemini failed to generate summary.");
		}
		const summaryText = response.text.split("===META_END===")[1];

		// Extract metadata from gemini response
		const metaData = extractMetaData(response.text);
		if (metaData) {
			// Save summary in the background to speed up displaying the generated summary
			logger.info("Saving summary in the background...");

			saveSummary(
				metaData.title,
				thumbnailUrl,
				videoUrl,
				metaData.estimatedReadTime,
				summaryText
			);
		}

		logger.info("After save summary action.");

		return {
			success: true,
			data: {
				title: metaData.title || "",
				thumbnailUrl: thumbnailUrl,
				videoUrl: videoUrl,
				estimatedReadTime: metaData.estimatedReadTime || "",
				summaryText: summaryText,
			},
		};
	} catch (error: any) {
		logger.error("Summary generation failed.", error);

		return {
			success: false,
			error: error.message,
		};
	}
};

const extractMetaData = (text: string) => {
	let metaData;

	try {
		const metaBlock = text.split("===META_START===")[1].split("===META_END===")[0].trim();
		metaData = JSON.parse(metaBlock);
	} catch (error) {
		// failed to parse metadata from gemini response text
		logger.error("Failed to parse metadata from gemini response.", error);
	}

	return metaData;
};
