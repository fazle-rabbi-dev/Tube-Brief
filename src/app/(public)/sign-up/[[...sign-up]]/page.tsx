import { METADATA } from "@/lib/constants/METADATA";
import { SignUp } from "@clerk/nextjs";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: METADATA.signUp.title,
	description: METADATA.signUp.description,
};

const SignUpPage = async () => {
	return (
		<section
			suppressHydrationWarning={true}
			className="flex-center">
			<SignUp />
		</section>
	);
};

export default SignUpPage;
