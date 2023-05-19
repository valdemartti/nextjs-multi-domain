interface DomainPageProps {
	params: {
		domain: string;
	};
}

export default function About({ params: { domain } }: DomainPageProps) {
	return <div>The site {domain} is great!</div>;
}
