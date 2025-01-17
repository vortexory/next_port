"use client";

import { motion } from "framer-motion";

const ProgressCircle = ({ skill: { title, percentage } }) => {
	const draw = {
		hidden: { pathLength: 0, opacity: 0 },
		visible: {
			pathLength: percentage / 100,
			opacity: 1,
		},
	};
	return (
		<div className="circleprogress card hovercard relative p-4 text-center md:p-5">
			<div className="relative mb-2 inline-block text-primary">
				<motion.svg
					className="circle"
					width="120"
					height="120"
					viewBox="0 0 120 120"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<motion.circle
						className="circlebg"
						cx="60"
						cy="60"
						r="54"
						pathLength="1"
						strokeLinecap="round"
						strokeWidth={12}
					/>
					<motion.circle
						cx="60"
						cy="60"
						r="54"
						strokeLinecap="round"
						strokeWidth={12}
						variants={draw}
						transition={{ duration: 1 }}
					/>
				</motion.svg>
				<span className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 transform text-center text-xl text-body">
					{percentage}%
				</span>
			</div>
			<h5>{title}</h5>
		</div>
	);
};

export default ProgressCircle;
