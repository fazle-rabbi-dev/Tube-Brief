import {
	Link2,
	Cpu,
	FileCheck,
	Zap,
	FileText,
	Languages,
	Clock,
	Brain,
	Download,
	LayoutDashboard,
	Copy,
	Settings,
} from "lucide-react";

export const HERO_INSIGHTS = [
	{
		amount: 100,
		suffix: "+",
		content: "Videos Summarized",
	},
	{
		amount: 5,
		suffix: "+",
		content: "Happy Users",
	},
	{
		amount: 3.5,
		suffix: "★",
		content: "User Rating",
	},
];

export const FEATURES = [
	{
		icon: Zap,
		title: "Lightning Fast",
		description:
			"Get comprehensive summaries in seconds, not minutes. TubeBrief processes videos 10x faster than watching.",
		animation: "zoom-in-left",
	},
	{
		icon: FileText,
		title: "Key Points Extraction",
		description:
			"Automatically identify and highlight the most important takeaways from any video content.",
		animation: "zoom-in-up",
	},
	{
		icon: Languages,
		title: "Multi-Language Support",
		description:
			"Summarize videos in any language with accurate translations and context preservation.",
		animation: "fade-up",
	},
	{
		icon: LayoutDashboard,
		title: "Smart Dashboard",
		description:
			"View your recent summaries, track usage stats, and manage your activity from one clean dashboard.",
		animation: "zoom-in-right",
	},
	{
		icon: Copy,
		title: "Copy with One Click",
		description:
			"Easily copy generated summaries and video transcripts for notes, sharing, or further study.",
		animation: "zoom-out-right",
	},
	{
		icon: Settings,
		title: "Local API Key Control",
		description:
			"Manage your API keys securely in settings. Keys are stored only in your browser, never on our servers.",
		animation: "zoom-in-left",
	},
];

export const WORKFLOW_STEPS = [
	{
		number: "01",
		icon: Link2,
		title: "Paste the Link",
		description:
			"Simply copy any YouTube video URL and paste it into TubeBrief. That's all you need to get started.",
	},
	{
		number: "02",
		icon: Cpu,
		title: "AI Processing",
		description:
			"Behind the scene AI analyzes the video content, extracting key themes, important points, and insights.",
	},
	{
		number: "03",
		icon: FileCheck,
		title: "Get Your Summary",
		description:
			"Receive a beautifully formatted summary with key takeaways, and exportable notes.",
	},
];

export const FAQ = [
	{
		question: "🤖 How does TubeBrief generate summaries?",
		answer:
			"TubeBrief first fetches the video transcript using a Transcript API (via RapidAPI). It then uses the Gemini AI model to analyze the transcript and generate a clear, structured summary focused on the key points.",
	},
	{
		question: "📚 Are my summaries saved for later?",
		answer:
			"Yes. All generated summaries are securely saved in the database and linked to your account, so you can revisit them anytime from your dashboard.",
	},
	{
		question: "🌍 Can I generate summaries in other languages?",
		answer:
			"Yes. You can choose any language for the summary. TubeBrief will generate the summary in your selected language, even if the original video is in a different one.",
	},
	{
		question: "📋 Can I copy the summary or transcript?",
		answer:
			"Absolutely. You can copy both the generated summary and the full video transcript with a single click for use in notes, documents, or other tools.",
	},
	{
		question: "🔐 Where are my API keys stored?",
		answer:
			"Your API keys are stored only in your browser using local storage. They are never saved to our server or database, ensuring full control and privacy.",
	},
	{
		question: "🎥 Does TubeBrief work with any YouTube video?",
		answer:
			"TubeBrief works with most public YouTube videos that have transcripts available. Private videos or videos without transcripts may not be supported.",
	},
	{
		question: "⚠️ Are there any limits on summary generation?",
		answer:
			"Yes. The transcript API allows up to 100 requests per month per API key, which means you can generate around 100 summaries with a single key. Once the limit is reached, you’ll need to update your API key in settings. Gemini AI allows up to 1,000 requests per month, which is usually sufficient for regular usage.",
	},
];
