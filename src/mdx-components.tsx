import type { MDXComponents } from "mdx/types";
import Note from "@/components/shared/Note";

const components: MDXComponents = {
	Note,
};

export function useMDXComponents(): MDXComponents {
	return components;
}
