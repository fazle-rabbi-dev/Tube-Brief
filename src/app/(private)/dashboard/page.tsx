import { connection } from 'next/server'

import { METADATA } from "@/lib/constants/METADATA";
import type { Metadata } from "next";
import DashboardContent from "./dashboard-content";
import { getSummaryHistories, getWeekActivities } from "@/lib/actions/summary.action";

export const metadata: Metadata = {
	title: METADATA.dashboard.title,
	description: METADATA.dashboard.description,
};

// Implement skeleton loader
const DashboardPage = async () => {
	await connection()

	const [histories, weekActivities] = await Promise.all([
		getSummaryHistories(6),
		getWeekActivities(),
	]);

	return <DashboardContent histories={histories} weekActivities={weekActivities} />;
};

export default DashboardPage;
