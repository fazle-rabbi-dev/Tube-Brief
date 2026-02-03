import Footer from "@/components/core/Footer";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			{children}
			<Footer />
		</>
	);
};

export default PublicLayout;
