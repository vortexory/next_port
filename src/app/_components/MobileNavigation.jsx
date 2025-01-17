import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiCloseLine } from "react-icons/ri";
import { Link as ScrollLink } from "react-scroll";

const MobileNavigation = ({ changeState }) => {
	const pathname = usePathname();
	const checkroute = pathname === "/";

	const handleClick = () => {
		changeState(false);
	};

	return (
		<>
			<button
				className="btn btn-small btn-transparent absolute left-auto right-4 top-4 z-10 h-10 w-10 rounded-full p-0 text-center text-3xl"
				onClick={() => changeState(false)}
			>
				<RiCloseLine className="inline" />
			</button>
			<nav className="relative max-h-full w-full overflow-y-auto">
				<ul className="mb-0 list-none pl-0">
					<li className="block">
						{!checkroute ? (
							<Link
								href="/"
								className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary"
								onClick={() => handleClick()}
							>
								Home
								<span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
							</Link>
						) : (
							<ScrollLink
								activeClass="text-primary"
								to="section-home"
								spy={true}
								smooth="easeInQuad"
								offset={-74}
								duration={1000}
								className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary"
								onClick={() => handleClick()}
							>
								Home
								<span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
							</ScrollLink>
						)}
					</li>
					<li className="block">
						{!checkroute ? (
							<Link
								href="/"
								className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary"
								onClick={() => handleClick()}
							>
								About
								<span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
							</Link>
						) : (
							<ScrollLink
								activeClass="text-primary"
								to="section-about"
								spy={true}
								smooth="easeInQuad"
								offset={-74}
								duration={1000}
								className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary"
								onClick={() => handleClick()}
							>
								About
								<span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
							</ScrollLink>
						)}
					</li>
					<li className="block">
						{!checkroute ? (
							<Link
								href="/"
								className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary"
								onClick={() => handleClick()}
							>
								Resume
								<span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
							</Link>
						) : (
							<ScrollLink
								activeClass="text-primary"
								to="section-resume"
								spy={true}
								smooth="easeInQuad"
								offset={-74}
								duration={1000}
								className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary"
								onClick={() => handleClick()}
							>
								Resume
								<span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
							</ScrollLink>
						)}
					</li>
					<li className="block">
						{!checkroute ? (
							<Link
								href="/"
								className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary"
								onClick={() => handleClick()}
							>
								Works
								<span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
							</Link>
						) : (
							<ScrollLink
								activeClass="text-primary"
								to="section-portfolios"
								spy={true}
								smooth="easeInQuad"
								offset={-74}
								duration={1000}
								className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary"
								onClick={() => handleClick()}
							>
								Works
								<span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
							</ScrollLink>
						)}
					</li>
					<li className="block">
						{!checkroute ? (
							<Link
								href="/"
								className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary"
								onClick={() => handleClick()}
							>
								Contact
								<span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
							</Link>
						) : (
							<ScrollLink
								activeClass="text-primary"
								to="section-contact"
								spy={true}
								smooth="easeInQuad"
								offset={-74}
								duration={1000}
								className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary"
								onClick={() => handleClick()}
							>
								Contact
								<span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
							</ScrollLink>
						)}
					</li>
				</ul>
				<div className="header-button pt-8">
					<ScrollLink
						activeClass="active"
						to="section-contact"
						spy={true}
						smooth="easeInQuad"
						offset={-74}
						duration={1000}
						className="btn btn-small"
						onClick={() => handleClick()}
					>
						<span>Hire Me</span>
					</ScrollLink>
				</div>
			</nav>
		</>
	);
};

export default MobileNavigation;
