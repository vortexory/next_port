"use client";

import { Element as Section } from "react-scroll";

export default function SectionWrapper({ name, className = "", children }) {
	return (
		<Section name={name} className={className}>
			{children}
		</Section>
	);
}
