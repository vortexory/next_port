"use client";

import { SocialIcons } from "@/components/elements";
import { getInformation } from "@/fetchers";
import Link from "next/link";
import { useQuery } from "react-query";

const Footer = () => {
	const { data } = useQuery("information", getInformation);

	if (!data) return null;

	return (
		<footer className="footer relative z-20 border-t border-white border-opacity-10 bg-grey bg-opacity-95 backdrop-blur backdrop-filter">
			<div className="container mx-auto">
				<div className="footer-content flex flex-wrap items-center justify-between gap-y-5 gap-x-7 py-5 text-center md:flex-nowrap">
					<div className="w-full md:w-auto">
						<SocialIcons data={data.socialAddress} />
					</div>
					<p className="mb-0 w-full md:w-auto">
						&copy; {new Date().getFullYear()}, All right reserved
						<Link
							href="/"
							className="pl-1.5 font-medium text-heading no-underline hover:text-primary"
						>
							Dimitrije Vulovic
						</Link>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
