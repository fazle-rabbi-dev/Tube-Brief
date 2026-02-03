import type { Metadata } from "next";

import NewSummaryContent from "./new-summary-content";
import { METADATA } from "@/lib/constants/METADATA";

export const metadata: Metadata = {
	title: METADATA.newSummary.title,
	description: METADATA.newSummary.description,
};

const NewSummaryPage = () => {
	return <NewSummaryContent />;
};

export default NewSummaryPage;
