import SummarizeButton from "@/components/ui/summarize-button";
import { Search } from "lucide-react";

const VideoInput = ({ formAction }: { formAction: (formData: FormData) => void }) => {
	return (
		<section className="bg-card p-4 shadow-2xl rounded-2xl">
			<form action={formAction}>
				<div className="flex items-center gap-2 py-3 ">
					<Search size={18} />
					<input
						type="text"
						placeholder="Enter video URL"
						className="w-full outline-none border-0  py-3"
						name="videoUrl"
					/>
				</div>
				<SummarizeButton>
					<span>Summarize</span>
					{/* <span>
							<SparklesIcon />
						</span> */}
				</SummarizeButton>
				{/* <Button
						className="flex-center gap-2 w-full rounded-xl"
						size="lg">
						<span>Summarize</span>
						<span>
							<SparklesIcon />
						</span>
					</Button> */}
			</form>
		</section>
	);
};

export default VideoInput;
