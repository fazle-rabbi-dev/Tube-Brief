import dbConnect from "@/lib/database/connect-db";
import { User } from "@/lib/database/user.model";
import { log } from "@/lib/utils";
import { WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { Webhook } from "svix";
import chalk from "chalk";

export async function GET() {
	try {
		const r = await dbConnect();
		console.log("db is connected,", r);
	} catch (error) {
		return new Response("Failed to connect with db.");
	}

	log(chalk.bold.bgBlue.white("Hello there"));

	return Response.json({ name: "rabbi" });
}

export async function POST(request: Request) {
	log(chalk.bold.bgBlue.white("@Wekhook received."));

	const payload = await request.text();

	const headerList = await headers();
	const svixId = headerList.get("svix-id") as string;
	const svixTimestamp = headerList.get("svix-timestamp") as string;
	const svixSignature = headerList.get("svix-signature") as string;

	if (!svixId || !svixTimestamp || !svixSignature) {
		return new Response("Missing Svix headers", { status: 400 });
	}

	const webhookSecret = process.env.CLERK_WEBHOOK_SECRET!;
	if (!webhookSecret) {
		return new Response("Missing webhook secret", { status: 400 });
	}

	const wh = new Webhook(webhookSecret);
	let event: WebhookEvent;

	try {
		event = wh.verify(payload, {
			"svix-id": svixId,
			"svix-timestamp": svixTimestamp,
			"svix-signature": svixSignature,
		}) as WebhookEvent;
	} catch (err) {
		return new Response("Invalid signature", { status: 400 });
	}

	const { type, data } = event;
	let createdUser;

	// if this is sign-up event register user
	if (type === "user.created") {
		await dbConnect();

		const primaryEmail = event.data?.email_addresses.find(
			(email) => email.id === event.data.primary_email_address_id,
		)?.email_address;

		// Check user existance
		const user = await User.findOne({ clerkUserId: data.id });
		if (user) {
			return Response.json({ message: "User already exists." }, { status: 409 });
		}

		createdUser = await User.create({
			clerkUserId: data.id,
			email: primaryEmail,
			name: `${data.first_name} ${data.last_name}`,
		});

		console.log({ createdUser });

		if (!createdUser) {
			return Response.json({ message: "Failed to register user." }, { status: 400 });
		}
	}

	return Response.json({ message: "User created successfully", createdUser });
}
