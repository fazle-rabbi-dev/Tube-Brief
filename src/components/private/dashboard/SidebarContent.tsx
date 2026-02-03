import Link from "next/link";
import { getSummaryHistories } from "@/lib/actions/summary.action";
import dynamic from "next/dynamic";
import { connection } from "next/server";

const SidebarContent = async () => {
	await connection();
	const histories = await getSummaryHistories();

	if (!histories || histories.length === 0) return <p className="px-4">No histories found</p>;

	return (
		<div className="px-4 overflow-auto pb-10 space-y-3">
			{histories?.map((history, index) => (
				<Link
					href={`/dashboard/summaries/${history._id.toString()}`}
					key={index}
					className="flex items-center justify-between hover:underline ">
					<p>{history.title.slice(0, 40)} ...</p>
				</Link>
			))}
		</div>
	);
};

export default SidebarContent;
