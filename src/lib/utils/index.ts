import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import chalk from "chalk";
import { toast } from "sonner";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const getYouTubeVideoId = (url: string) => {
	try {
		const parsedUrl = new URL(url);
		const host = parsedUrl.hostname;

		if (host.includes("youtube.com")) {
			return parsedUrl.searchParams.get("v");
		}

		if (host.includes("youtu.be")) {
			return parsedUrl.pathname.split("/")[1];
		}

		return null; // Not a valid YouTube link
	} catch (err) {
		return null; // Invalid URL format
	}
};

export const copyToClipboard = async (text) => {
	try {
		// ✅ First try modern Clipboard API
		if (navigator.clipboard && window.isSecureContext) {
			await navigator.clipboard.writeText(text);
		} else {
			// ⛔ Fallback for insecure contexts or unsupported browsers
			const textarea = document.createElement("textarea");
			textarea.value = text;
			textarea.style.position = "fixed"; // Avoid scrolling
			textarea.style.opacity = "0";
			document.body.appendChild(textarea);
			textarea.focus();
			textarea.select();

			const successful = document.execCommand("copy");
			if (!successful) throw new Error("Fallback copy failed");

			document.body.removeChild(textarea);
		}
		toast.success("Text copied to clipboard!");
	} catch (err) {
		toast.error("Failed to copy!");
	}
};

export class Localstorage {
	static getItem(key: string) {
		return localStorage.getItem(key);
	}
	static setItem(key: string, value: string) {
		return localStorage.setItem(key, value);
	}
	static removeItem(key: string) {
		return localStorage.removeItem(key);
	}

	static get rapidApiKey(): string | null {
		return this.getItem("rapid-api-key");
	}

	static get geminiApiKey(): string | null {
		return this.getItem("gemini-api-key");
	}

	static get summaryLanguage(): string {
		const defaultLang = "english";
		const savedLang = this.getItem("summary-language");

		if (isValidLanguage(savedLang)) {
			return savedLang;
		} else {
			return defaultLang;
		}
	}
}

export const log = console.log;

type LogLevel = "info" | "success" | "warn" | "error" | "debug";

const time = () => chalk.gray(new Date().toLocaleTimeString());

const label = (text: string, color: chalk.Chalk) => color.bold(` ${text} `);

export const logger = {
	info(message: string) {
		console.log(`>>>===${time()} ${label("INFO", chalk.blue)} ${message}`);
	},

	success(message: string) {
		console.log(`>>>===${time()} ${label("SUCCESS", chalk.green)} ${chalk.green(message)}`);
	},

	warn(message: string) {
		console.log(`>>>===${time()} ${label("WARN", chalk.yellow)} ${chalk.yellow(message)}`);
	},

	error(message: string, error?: unknown) {
		console.error(`>>>===${time()} ${label("ERROR", chalk.red)} ${chalk.red(message)}`);

		if (error) {
			console.error(chalk.dim(error));
		}
	},

	debug(message: string) {
		if (process.env.NODE_ENV === "development") {
			console.log(`>>>===${time()} ${label("DEBUG", chalk.magenta)} ${chalk.magenta(message)}`);
		}
	},
};

export function isValidLanguage(lang: unknown): lang is string {
	if (typeof lang !== "string") return false;

	const trimmed = lang.trim();

	if (!trimmed) return false;

	// Only letters and spaces (supports multi-word languages)
	const languageRegex = /^[A-Za-z\s]{2,30}$/;

	return languageRegex.test(trimmed);
}

export const constractAiPrompt = (transcript: string) => {
	const summaryLanguage = Localstorage.summaryLanguage;

	return `
				You are an AI video summarizer.
	
				Your task:
				- Analyze the provided YouTube video transcript
				Generate a clear and concise summary in ${summaryLanguage}, using natural language that sounds human and easy to read.
				- Output must be in **Markdown**
	
				⚠️ VERY IMPORTANT FORMATTING RULES (STRICT):
				1. Start with a metadata block wrapped between:
					===META_START===
					===META_END===
				2. Metadata must contain ONLY the following 2 property as json string:
					- title → AI-generated, catchy, relevant, include ONE emoji
					- estimatedReadTime → short human-readable value (example: "3 min read")
	
	
				3. After metadata, write the summary content
				4. Use bullet points and relevant emojis (do NOT overuse emojis)
				5. Add a **TL;DR** section at the very end
				6. Do NOT include any explanation outside the requested format
	
				---
	
				📌 OUTPUT FORMAT (FOLLOW EXACTLY):
	
				===META_START===
				{
					"title": "<AI generated title with one emoji>",
					"estimatedReadTime": "<X min read>"
				}
				===META_END===
	
				## {same video title goes here that present inside meta block}
	
				summary text
	
				## TL;DR
	
				TL;DR text
				---
	
				Here is the transcript:
				${transcript}
			`;
};

export function isMobileDevice() {
	if (typeof window === "undefined") return false;

	const isSmallScreen = window.matchMedia("(max-width: 767px)").matches;
	const isTouch = navigator.maxTouchPoints > 0;

	console.log({
		isSmallScreen,
		isTouch
	})

	return isSmallScreen && isTouch;
}
