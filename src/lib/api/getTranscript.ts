import { Localstorage } from "@/lib/utils";

export const getTranscript = async (videoId: string) => {
	const apiKey = Localstorage.rapidApiKey;

	if (!apiKey) throw new Error("Please add rapid api key from settings.");

	const url = `${process.env.NEXT_PUBLIC_TRANSCRIPT_API_URL}?videoId=${videoId}`;
	const options = {
		method: "GET",
		headers: {
			"x-rapidapi-key": apiKey,
			"x-rapidapi-host": "youtube-transcript3.p.rapidapi.com",
		},
	};

	try {
		const response = await fetch(url, options);
		const result = await response.json();

		if (!result || !result.transcript)
			throw new Error("Looks like api key is invalid or rate limit exceeded. Make sure your api key is correct. Or set new fresh api keys from settings.");

		const plainText = result.transcript.map((obj: { text: string }) => obj.text).join(" ");
		return plainText;
	} catch (error) {
		throw error;
	}
};
