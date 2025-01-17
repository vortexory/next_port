"use client";

import LanguageSkills from "./LanguageSkills";
import TechSkills from "./TechSkills";

const SkillsSection = () => {
	return (
		<div className="skills-wrapper">
			<TechSkills />
			<div className="py-7"></div>
			<LanguageSkills />
		</div>
	);
};

export default SkillsSection;
