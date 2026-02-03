// ? Understand typescript with mongoose

import mongoose, { Schema, Document, Model } from "mongoose";

/* =======================
   1. TypeScript Interface
======================= */
export interface IUser extends Document {
	clerkUserId: string;
	email: string;
	name?: string;
	createdAt: Date;
	updatedAt: Date;
}

/* =======================
   2. Mongoose Schema
======================= */
const UserSchema = new Schema<IUser>(
	{
		clerkUserId: {
			type: String,
			required: true,
			unique: true,
			index: true,
			trim: true,
		},

		email: {
			type: String,
			required: true,
			lowercase: true,
			trim: true,
			match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
		},

		name: {
			type: String,
			trim: true,
			maxlength: 100,
		},
	},
	{
		timestamps: true,
	}
);

/* =======================
   3. Model Export
======================= */
export const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
