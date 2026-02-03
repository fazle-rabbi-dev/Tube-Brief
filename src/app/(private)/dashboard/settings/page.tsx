import { METADATA } from "@/lib/constants/METADATA";
import SettingsContent from "./settings-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: METADATA.settings.title,
	description: METADATA.settings.description,
};

const SettingsPage = () => {
	return <SettingsContent />;
};

export default SettingsPage;
