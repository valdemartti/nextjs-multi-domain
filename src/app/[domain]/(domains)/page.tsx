import Link from "next/link";

interface DomainPageProps {
	params: {
		domain: string;
	};
}

export default function DomainPage({ params: { domain } }: DomainPageProps) {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24 pb-52 bg-theme">
			<div className="flex flex-col items-center justify-center max-w-3xl">
				<h1 className="text-5xl font-bold text-center mb-6 text-theme">
					Welcome to {domain}!
				</h1>
				<p className="text-sm opacity-80 text-center text-theme">
					You are currently visiting the {domain} domain. This page has been
					dynamically styled based on the domain you are visiting.
				</p>
				<p className="my-4 text-sm opacity-80 text-center text-theme">
					Check out the main domain and the dynamically customized domains
					below!
				</p>
				<div className="flex flex-col items-center justify-center bg-black py-2 px-3 rounded-lg">
					<Link href="https://multidomain.valtteri.dev" className="text-white">
						multidomain.valtteri.dev
					</Link>
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
			</div>
		</main>
	);
}
