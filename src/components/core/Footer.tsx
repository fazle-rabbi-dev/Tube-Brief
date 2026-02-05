import Link from "next/link";

import CopyRight from "../core/CopyRight";
import { GithubIcon } from "../ui/github";
import { LinkedinIcon } from "../ui/linkedin";

const Footer = () => {
	return (
		<footer className="mt-20 py-8 border-t">
			<div className="max-w-[1200px] mx-auto px-4 md:px-10 xl:px-0">
				<div className="relative flex flex-col space-y-2 md:flex-row justify-between items-center">
					<CopyRight />

					<p className="md:absolute md:bottom-1/2 md:left-1/2 transform md:-translate-x-1/2 md:translate-y-1/2 ">
						Made with ❤️ by{" "}
						<Link
							className="underline hover:text-blue-500"
							href="https://fazle-rabbi-dev.vercel.app/?source=tube-brief">
							Fazle Rabbi
						</Link>
					</p>

					<ul className="flex-vr-center gap-3">
						<li>
							<Link
								target="_blank"
								href="https://github.com/fazle-rabbi-dev/Tube-Brief?tab=readme-ov-file">
								<GithubIcon />
							</Link>
						</li>
						<li>
							<Link
								target="_blank"
								href="https://bd.linkedin.com/in/fazlerabbidev">
								<LinkedinIcon />
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
