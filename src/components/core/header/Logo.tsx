import { cn } from "@/lib/utils";
import { Play } from "lucide-react";

const Logo = ({ variant }: { variant?: string }) => {
	return (
		<div className="flex items-center gap-2">
			<span
				className={cn(
					"w-7 h-7 rounded-lg bg-primary flex items-center justify-center group-hover:scale-110 transition-transform",
					variant === "footer" && "size-20 bg-black",
				)}>
				<Play
					className={cn(
						"w-5 h-5 text-primary-foreground fill-current",
						variant === "footer" && " text-white size-10",
					)}
				/>
			</span>
			<span
				className={cn("text-lg font-bold text-foreground", variant === "footer" && "hidden")}>
				TubeBrief
			</span>
		</div>
	);
};

export default Logo;
