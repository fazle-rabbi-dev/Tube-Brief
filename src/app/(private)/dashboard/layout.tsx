import Sidebar from "@/components/private/dashboard/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactElement }) => {
	return (
		<>
			<Sidebar />
			{children}
		</>
	);
};

export default DashboardLayout;
