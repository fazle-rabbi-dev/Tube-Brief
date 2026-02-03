import type { Metadata } from "next";
import AboutContent from "./About.mdx";
import { METADATA } from "@/lib/constants/METADATA";

export const metadata: Metadata = {
	title: METADATA.about.title,
	description: METADATA.about.description,
};

const AboutPage = () => {
	return (
		<main className="container">
			<article className="max-w-full prose  dark:prose-invert">
				<AboutContent />
			</article>
		</main>
	);
};

export default AboutPage;
