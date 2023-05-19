interface DomainPageProps {
	params: {
		domain: string;
	};
}

export default function DomainPage({ params: { domain } }: DomainPageProps) {
	return (
		<div className="bg-theme text-theme">
			Welcome to page.tsx in the {domain} domain!
		</div>
	);
}
