import { GitHubButton } from "@/app/GitHubButton";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24 pb-52">
			<div className="flex flex-col items-center justify-center max-w-3xl">
				<h1 className="text-5xl font-bold text-center mb-6">
					Welcome to the Next.js Multi Domain Demo!
				</h1>
				<p className="text-sm opacity-80 text-center">
					You are currently visiting the main domain.
				</p>
				<p className="my-4 text-sm opacity-80 text-center">
					Check out the dynamically customized domains below!
				</p>
				<div className="flex flex-col items-center justify-center bg-black py-2 px-3 rounded-lg">
					<Link
						href="https://multidomain1.valtteri.dev"
						className="text-red-500">
						multidomain1.valtteri.dev
					</Link>
					<Link
						href="https://multidomain2.valtteri.dev"
						className="text-blue-500">
						multidomain2.valtteri.dev
					</Link>
				</div>
				<div className="my-4 flex items-center justify-center">
					<GitHubButton
						text="Source code"
						href="https://github.com/valdemartti/nextjs-multi-domain"
						ariaLabel="View the source code on GitHub"
					/>
					<GitHubButton
						text="Follow @valdemartti"
						href="https://github.com/valdemartti"
						ariaLabel="Follow @valdemartti on GitHub"
					/>
				</div>
			</div>
		</main>
	);
}
