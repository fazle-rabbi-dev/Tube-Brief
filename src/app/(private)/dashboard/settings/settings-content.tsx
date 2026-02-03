"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { isValidLanguage, Localstorage } from "@/lib/utils";
import { Spinner } from "@/components/ui/spinner";

// ============= Schema =============
const formSchema = z.object({
	rapid_api_key: z.string().min(50, "Please input a valid api key."),
	gemini_api_key: z.string().min(38, "Please input a valid api key."),
});

type FormData = z.infer<typeof formSchema>;

// ============= Component =============
const SettingsContent = () => {
	const [summaryLanguage, setSummaryLanguage] = useState("");
	const [savedKeys, setSavedKeys] = useState({
		rapid: "",
		gemini: "",
	});


	useEffect(() => {
		setSavedKeys({
			rapid: Localstorage.rapidApiKey || "",
			gemini: Localstorage.geminiApiKey || "",
		});

		setSummaryLanguage(Localstorage.summaryLanguage as string)
	}, []);

	// ============= Form Manager =============
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: zodResolver(formSchema),
	});

	const onSubmit = (data: FormData) => {
		// Save api keys
		Localstorage.setItem("rapid-api-key", data.rapid_api_key);
		Localstorage.setItem("gemini-api-key", data.gemini_api_key);

		// Update ui with fresh api keys
		setSavedKeys({
			rapid: data.rapid_api_key,
			gemini: data.gemini_api_key,
		});

		toast.success("Api keys saved successfully.");
		reset();
	};

	const handleLanguageSave = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const isValidLang = isValidLanguage(summaryLanguage);

		if (isValidLang) {
			Localstorage.setItem("summary-language", summaryLanguage);
			return toast.success("Saved successful.");
		}

		toast.error("Please input a correct language.")
	};


	return (
		<main className="container mt-0">
			<section className="">
				<h2 className="heading-3">Summary Language</h2>
				<p>
					<i>Default language is english</i>
				</p>
				<form onSubmit={handleLanguageSave} className="mt-3">
					<Input
						type="text"
						placeholder="e.g: english/bangla/hindi/urdhu"
						onChange={(e) => setSummaryLanguage(e.target.value)}
						value={summaryLanguage}
					/>
					<Button
						type="submit"
						className="mt-4 w-full">
						Save
					</Button>
				</form>
			</section>

			{/* Saved api keys */}
			<section className="mt-20">
				<h2 className="heading-3 mb-4">Saved API Keys</h2>

				<Card className="">
					<CardContent className="space-y-4">
						<div className="mt-6">
							<p className="mb-1">🚀 Rapid API Key</p>
							<code className="">
								{savedKeys.rapid.length > 0 ? savedKeys.rapid : <Spinner />}
							</code>
						</div>
						<div className="">
							<p className="mb-1">✨ Gemini API Key</p>
							<code className="">
								{savedKeys.gemini.length > 0 ? savedKeys.gemini : <Spinner />}
							</code>
						</div>
					</CardContent>
				</Card>
			</section>

			{/* Api key Management */}
			<section className="mt-20">
				<h2 className="heading-3 mb-4">Api keys</h2>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="space-y-4">
					<div className="">
						<label htmlFor="rapid_api_key">Rapid API Key</label>
						<Input
							type="text"
							id="rapid_api_key"
							className="mt-2"
							{...register("rapid_api_key")}
						/>
						{errors.rapid_api_key && (
							<p className="text-red-500 mt-2 italic font-mono text-xs">
								{errors.rapid_api_key.message}
							</p>
						)}
					</div>
					<div className="">
						<label htmlFor="gemini_api_key">Gemini API Key</label>
						<Input
							type="text"
							id="gemini_api_key"
							className="mt-2"
							{...register("gemini_api_key")}
						/>
						{errors.gemini_api_key && (
							<p className="text-red-500 mt-2 italic font-mono text-xs">
								{errors.gemini_api_key.message}
							</p>
						)}
					</div>
					<Button
						type="submit"
						className="mt-4 w-full">
						Save
					</Button>
				</form>
			</section>
		</main>
	);
};

export default SettingsContent;
