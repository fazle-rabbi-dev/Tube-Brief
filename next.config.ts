import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
	/* config options here */
	cacheComponents: true,
	reactCompiler: true,
	typescript: {
		ignoreBuildErrors: true,
	},
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
	images: {
		remotePatterns: [
			{
				hostname: "i.ytimg.com",
				protocol: "https",
			},
			{
				hostname: "img.youtube.com",
				protocol: "https",
			},
		],
	},
};

const withMDX = createMDX({
	// Add markdown plugins here, as desired
	extension: /\.(md|mdx)$/,
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
