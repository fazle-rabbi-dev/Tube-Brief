"use server";

import { auth } from "@clerk/nextjs/server";
import mongoose from "mongoose";

import { logger } from "@/lib/utils";
import dbConnect from "../database/connect-db";
import { IVideoSummary, VideoSummary } from "../database/video-summary.model";

const isValidObjectId = (id: unknown): boolean => {
	return typeof id === "string" && mongoose.Types.ObjectId.isValid(id);
};

/* ============= SAVE SUMMARY ============= */
export const saveSummary = async (
	title: string,
	thumbnailUrl: string,
	videoUrl: string,
	estimatedReadTimeMinutes: string,
	summaryText: string,
) => {
	await new Promise((resolve) => setTimeout(resolve, 8000));

	logger.info("Save summary action is fired.");

	const { userId } = await auth();
	await dbConnect();

	try {
		const newSummaryDoc = {
			title,
			thumbnailUrl,
			videoUrl,
			estimatedReadTimeMinutes,
			summaryText,
			owner: userId as string,
		};

		const createdDoc = await VideoSummary.create(newSummaryDoc);
		logger.info("Summary saved successfully.");
		logger.info(JSON.stringify(createdDoc, null, 3));
	} catch (error) {
		logger.error("Failed to save summary", error);
	}
};

/* ============= GET SUMMARY HISTORIES ============= */
export const getSummaryHistories = async (
	limit: number | null = null,
): Promise<IVideoSummary[] | null> => {
	try {
		await dbConnect();
		const { userId } = await auth();

		let summaries;

		if (limit) {
			summaries = await VideoSummary.find({ owner: userId })
				.sort({ createdAt: -1 })
				.limit(limit);
		} else {
			summaries = await VideoSummary.find({ owner: userId });
		}


		if (!summaries) throw new Error("Failed to get summaries.");
		return summaries.reverse();
	} catch (error) {
		logger.error("Summaries not found.", error);
		return null;
	}
};

/* ============= GET ONE SUMMARY BY ID ============= */
export const getSummaryById = async (id: string) => {
	try {
		// validate id
		if (!isValidObjectId(id)) return null;

		await dbConnect();
		const { userId } = await auth();

		const summary = await VideoSummary.findOne({
			_id: id,
			owner: userId,
		});

		if (!summary) throw new Error("Failed to get summaries.");
		return summary;
	} catch (error) {
		logger.error("Summary not found.", error);
		return null;
	}
};

export const getWeekActivities = async () => {
	try {
		await dbConnect();
		const { userId } = await auth();

		const last7Days = new Date();
		last7Days.setDate(last7Days.getDate() - 6);

		const weeklyActivity = await VideoSummary.aggregate([
			{
				$match: {
					owner: userId,
					createdAt: { $gte: last7Days },
				},
			},
			{
				$group: {
					_id: {
						$dateToString: { format: "%Y-%m-%d", date: "$createdAt" },
					},
					count: { $sum: 1 },
				},
			},
			{ $sort: { _id: 1 } },
		]);


		return weeklyActivity;

		logger.info(JSON.stringify(weeklyActivity, null, 3));
	} catch (error) { }
};
