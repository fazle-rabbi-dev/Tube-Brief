import { Suspense } from "react";
import { History, PanelLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import SidebarContent from "./SidebarContent";

const Sidebar = () => {
	return (
		<aside className="w-full mt-16 max-w-[1200px] mx-auto px-4 md:px-10 xl:px-0">
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="outline">
						<PanelLeft />
					</Button>
				</SheetTrigger>

				<SheetContent side="left">
					<SheetHeader className="border-b">
						<SheetTitle className="-mt-1 flex items-center gap-2">
							<span>
								<History size={22} />
							</span>
							<p className="text-xl">history</p>
						</SheetTitle>
					</SheetHeader>

					{/* Display Summari History */}
					<Suspense fallback={<span>Loading..</span>}>
						<SidebarContent />
					</Suspense>
				</SheetContent>
			</Sheet>
		</aside>
	);
};

export default Sidebar;
