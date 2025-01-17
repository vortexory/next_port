"use client";

import { useParallax } from "react-scroll-parallax";

const SectionHeading = ({ title, watermark, animated = true }) => {
	const parallax = useParallax({
		translateX: animated ? [-200, 200] : null,
		easing: "easeInOut",
	});
	return (
		<div className="section-heading relative overflow-hidden pb-14 text-center">
			<h2 className="relative z-10 mb-2 uppercase">{title}</h2>
			<span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-primary bg-opacity-20">
				<span className="absolute left-0 top-0 inline-block h-full w-1.5 animate-lefttoright rounded-full bg-primary"></span>
			</span>
			<span
				ref={parallax.ref}
				className="pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-heading opacity-5"
			>
				{watermark}
			</span>
		</div>
	);
};

export default SectionHeading;
