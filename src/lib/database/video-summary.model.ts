import mongoose, { Schema, Document, Model } from "mongoose";

/* =======================
   1. TypeScript Interface
======================= */
export interface IVideoSummary extends Document {
	title: string;
	thumbnailUrl: string;
	videoUrl: string;
	estimatedReadTimeMinutes?: string;
	summaryText: string;
	owner: String;

	language?: "en" | "bn";
	createdAt?: Date;
	updatedAt?: Date;
}

/* =======================
   2. Mongoose Schema
======================= */
const VideoSummarySchema = new Schema<IVideoSummary>(
	{
		owner: {
			type: String,
			required: true,
			index: true,
		},

		videoUrl: {
			type: String,
			required: true,
			trim: true,
			match: [/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//, "Invalid YouTube URL"],
		},

		thumbnailUrl: {
			type: String,
			required: true,
			trim: true,
			match: [/^https?:\/\/.+/, "Invalid thumbnail URL"],
		},

		title: {
			type: String,
			required: true,
			trim: true,
			minlength: 5,
		},

		summaryText: {
			type: String,
			required: true,
			minlength: 50,
			maxlength: 5000,
		},

		estimatedReadTimeMinutes: {
			type: String,
			default: "1 Min",
			immutable: true,
		},
	},
	{
		timestamps: true,
	}
);

/* =======================
   3. Model Export
======================= */
export const VideoSummary: Model<IVideoSummary> =
	mongoose.models.Video_Summary ||
	mongoose.model<IVideoSummary>("Video_Summary", VideoSummarySchema);
