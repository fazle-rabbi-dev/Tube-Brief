import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import SplashCursor from '@/components/ui/SplashCursor'

export default function NotFound() {
	return (
		<main className="flex-center">
			<SplashCursor />

			<div className="text-center">
				<p>404</p>
				<h1 className="heading-1">
					Page Not Found
				</h1>
				<p className="mt-2 text-base">
					The page you are looking for doesn't exist or has been moved
				</p>
				<Link className="mt-3 inline-block bg-primary text-black border border-dotted border-white py-2 px-3" href="/">
					Go home
				</Link>
			</div>
		</main>
	);
}
