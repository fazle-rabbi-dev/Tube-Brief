"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { copyToClipboard } from "@/lib/utils";
import { Copy, FileText } from "lucide-react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

const VideoSummary = ({
	title,
	videoUrl,
	thumbnailUrl,
	estimatedReadTime,
	summaryText,
}: {
	title: string;
	videoUrl: string;
	estimatedReadTime: string;
	thumbnailUrl: string;
	summaryText: string;
}) => {
	return (
		<section className="mt-10 pb-28 grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
			{/* Video thumbnail */}
			<div className="">
				<Image
					src={thumbnailUrl}
					alt="Thumbnail"
					width={500}
					height={500}
					className="rounded-xl mb-2 w-full aspect-10/6 border"
				/>
			</div>

			{/* Video info */}
			<div className="border">
				<div className="p-6 flex flex-col h-full justify-between">
					<div className="space-y-4">
						<h2 className="text-lg font-bold font-mono leading-tight">{title}</h2>
						<div className="flex items-center gap-2 text-muted-foreground">
							<FileText className="w-4 h-4" />
							<span className="text-sm font-medium">{estimatedReadTime}</span>
						</div>
					</div>
					<Button
						asChild
						variant="outline"
						className="w-full mt-6">
						<a
							href={videoUrl}
							target="_blank"
							rel="noopener noreferrer">
							Watch Video
						</a>
					</Button>
				</div>
			</div>

			{/* Summary info */}
			<div className="md:col-span-2">
				<Card>
					<CardHeader>
						<CardTitle>
							<div className="flex items-center justify-between">
								<h3 className="flex items-center gap-2 font-bold">
									<span>
										<FileText />
									</span>
									<span>Key Takeaways</span>
								</h3>
								<div>
									<Button
										onClick={() => copyToClipboard(summaryText)}
										variant="outline">
										<Copy />
									</Button>
								</div>
							</div>
						</CardTitle>
					</CardHeader>
					<CardContent className="max-w-full prose  dark:prose-invert markdown-container">
						<ReactMarkdown>{summaryText}</ReactMarkdown>
					</CardContent>
				</Card>
			</div>
		</section>
	);
};

export default VideoSummary;
