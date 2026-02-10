import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Geist_Mono, Nunito } from "next/font/google";
import { ThemeProvider } from "next-themes";

import ClerkWrapper from "@/components/core/ClerkWrapper";
import Header from "@/components/core/header/Header";
import { Toaster } from "@/components/ui/sonner";
import { METADATA } from "@/lib/constants/METADATA";

const geistSans = Nunito({
	variable: "--font-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: METADATA.default.title,
	description: METADATA.default.description,

	metadataBase: new URL("https://tube-brief.vercel.app"),

	openGraph: {
		title: METADATA.openGraph.title,
		description: METADATA.openGraph.description,
		url: METADATA.openGraph.url,
		siteName: METADATA.openGraph.sitename,
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: METADATA.openGraph.title,
		description: "Youtube video summarizer.",
		siteId: "1467726470533754880",
		creator: "@fazle-rabbi-dev",
		creatorId: "1467726470533754880",
	},

	verification: {
		google: "bBOJ8YhTLw-vz1qayvGCHKw3GnTLPoQ4RWRodFvBqI4",
	},
};

export const viewport: Viewport = {
	themeColor: "#B83C2E",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning={true}>
			<body className={`${geistSans.className} ${geistMono.variable} antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					{/* Customized ClerkProvider */}
					<ClerkWrapper>
						<Header />
						{children}
					</ClerkWrapper>
				</ThemeProvider>
				<Toaster />
			</body>
		</html>
	);
}
