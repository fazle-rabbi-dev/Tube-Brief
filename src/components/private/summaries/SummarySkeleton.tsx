"use client";

import { Copy, FileText } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { useEffect, useState } from "react";

const SummarySkeleton = ({ parent }: { parent?: string }) => {
	const [duration, setDuration] = useState(1);

	useEffect(() => {
		setInterval(() => {
			setDuration((prev) => prev + 1);
		}, 1000);

		return () => {
			console.log("skeleton loader unmounted");
		};
	}, []);

	return (
		<section className="mt-10 pb-28 ">
			<TextShimmer
				className={
					parent === "summary_details" ? "hidden" : "font-mono text-sm text-center block mb-6"
				}
				duration={1}>
				Generating summary... ({duration}s)
			</TextShimmer>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
				<div className="">
					<Skeleton className="h-[300px] w-full rounded-xl" />
				</div>

				<div className="border">
					<div className="p-6 flex flex-col h-full justify-between">
						<div className="space-y-4">
							<Skeleton className="mt-4 h-[140px] w-full rounded-xl" />
							<div className="flex items-center gap-2 text-muted-foreground">
								<FileText className="w-4 h-4" />
								<Skeleton className="h-[10px] w-28 rounded-xl" />
							</div>
						</div>

						<Skeleton className="mt-6 h-[25px] w-full rounded-xl" />
					</div>
				</div>

				<div className="md:col-span-2">
					<Card>
						<CardHeader>
							<CardTitle>
								<div className="flex items-center justify-between gap-3">
									<h3 className="w-full flex items-center gap-2 font-bold">
										<span>
											<FileText />
										</span>
										<Skeleton className="h-[25px] w-42 rounded-xl" />
									</h3>
									<Button variant="outline">
										<Copy />
									</Button>
								</div>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<Skeleton className="w-full h-[400px] rounded-xl" />
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
};

export default SummarySkeleton;
