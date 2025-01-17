"use client";

import useEventListener from "@/hooks/useEventListener";
import { motion } from "framer-motion";
import { useState } from "react";
import { RiArrowUpSLine } from "react-icons/ri";
import Scroll from "react-scroll";

export default function BackToTop() {
	const [backToTop, setBackToTop] = useState(false);

	const scroll = Scroll.animateScroll;

	const isVisible = () => {
		const scrollTop = window.scrollY;
		scrollTop > 500 ? setBackToTop(true) : setBackToTop(false);
	};

	useEventListener("scroll", isVisible);

	return (
		<motion.button
			initial={{
				opacity: 0,
				x: 1000,
			}}
			animate={{
				opacity: backToTop ? 1 : 0,
				x: backToTop ? 0 : 1000,
			}}
			className="btn fixed bottom-12 left-auto top-auto right-7 z-30 rounded-full p-2.5 text-xl"
			onClick={() => scroll.scrollToTop()}
		>
			<RiArrowUpSLine />
		</motion.button>
	);
}
