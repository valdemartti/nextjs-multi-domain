import Image from "next/image";
import Link from "next/link";

interface GitHubButtonProps {
	ariaLabel: string;
	href: string;
	text: string;
}

export const GitHubButton = ({ ariaLabel, href, text }: GitHubButtonProps) => {
	return (
		<Link
			href={href}
			className="text-sm m-1 font-semibold text-center rounded-md py-2 pl-3 pr-4 bg-white text-black flex items-center justify-center"
			aria-label={ariaLabel}
			target="_blank">
			<Image
				src="/github.svg"
				width={24}
				height={24}
				alt="GitHub logo"
				className="mr-2"
			/>
			{text}
		</Link>
	);
};
