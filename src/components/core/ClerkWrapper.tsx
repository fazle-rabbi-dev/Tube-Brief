"use client";

import { Suspense } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import PageLoader from "@/components/shared/PageLoader";

const ClerkWrapper = ({ children }: { children: React.ReactNode }) => {
	const { resolvedTheme } = useTheme();

	return (
		<Suspense fallback={<PageLoader />}>
			<ClerkProvider
				appearance={{
					baseTheme: resolvedTheme === "dark" ? dark : undefined,
					variables: {
						// colorPrimary: "#3b82f6", // Example: Blue-500
					},
				}}>
				{children}
			</ClerkProvider>
		</Suspense>
	);
};

export default ClerkWrapper;
