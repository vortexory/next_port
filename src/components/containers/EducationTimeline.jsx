"use client";

import { motion } from "framer-motion";
import { RiBookLine } from "react-icons/ri";
import { useQuery } from "react-query";
import { getEducationBackground } from "../../fetchers";
import { childrenAnimation } from "../../lib/motion";
import { TimelineItem } from "../elements";

const EducationTimeline = () => {
	const { data } = useQuery("education-background", getEducationBackground);

	if (!data) return null;

	return (
		<div className="education-timeline">
			<h4>
				<RiBookLine className="mr-2 inline-block text-primary" />
				Educational Qualification
			</h4>
			{data?.map((timeline, index) => (
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					transition={{ duration: 0.4, delay: 0.2 * index }}
					variants={childrenAnimation}
					className="timeline-wrap"
					key={timeline.id}
				>
					<TimelineItem timeline={timeline} />
				</motion.div>
			))}
		</div>
	);
};

export default EducationTimeline;
