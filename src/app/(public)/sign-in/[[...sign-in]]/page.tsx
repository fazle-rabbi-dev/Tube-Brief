import { METADATA } from "@/lib/constants/METADATA";
import { SignIn } from "@clerk/nextjs";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: METADATA.signIn.title,
	description: METADATA.signIn.description,
};

const SignInPage = async () => {
	return (
		<main
			suppressHydrationWarning={true}
			className="flex-center">
			<SignIn />
		</main>
	);
};

export default SignInPage;
