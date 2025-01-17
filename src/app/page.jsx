import {
	AboutSection,
	ContactSection,
	HeroSection,
	PortfoliosSection,
	ResumeSection,
	ReviewsSection,
	ServicesSection,
	SkillsSection,
} from "@/components/containers";
import { SectionHeading } from "@/components/utils";
import SectionWrapper from "@/components/utils/SectionWrapper";
import React from "react";

export const metadata = {
	title: "Homepage",
};

const Homepage2 = () => {

	return (
		<React.Fragment>
			{/* Start Hero Section */}
			<SectionWrapper name="section-home">
				<HeroSection blurred />
			</SectionWrapper>
			{/* End Hero Section */}

			{/* Start About Section */}
			<SectionWrapper name="section-about" className="about-section pt-24 lg:pt-28 xl:pt-32">
				<div className="container mx-auto">
					<SectionHeading animated={false} title="About Me" watermark="About" />
					<AboutSection />
				</div>
			</SectionWrapper>
			{/* End About Section */}

			{/* Start Skills Section */}
			<SectionWrapper
				name="section-skills"
				className="skills-section pt-24 lg:pt-28 xl:pt-32"
			>
				<div className="container mx-auto">
					<SectionHeading animated={false} title="My Skills" watermark="Skills" />
					<SkillsSection />
				</div>
			</SectionWrapper>
			{/* End Skills Section */}

			{/* Start Service Section */}
			<SectionWrapper
				name="section-service"
				className="services-section pt-24 lg:pt-28 xl:pt-32"
			>
				<div className="container mx-auto">
					<SectionHeading animated={false} title="My Services" watermark="Services" />
					<ServicesSection />
				</div>
			</SectionWrapper>
			{/* End Service Section */}

			{/* Start Resume Section */}
			<SectionWrapper
				name="section-resume"
				className="resume-section pt-24 lg:pt-28 xl:pt-32"
			>
				<div className="container mx-auto">
					<SectionHeading animated={false} title="My Resume" watermark="Resume" />
					<ResumeSection />
				</div>
			</SectionWrapper>
			{/* End Resume Section */}

			{/* Start Portfolios Section */}
			<SectionWrapper
				name="section-portfolios"
				className="portfolios-section pt-24 lg:pt-28 xl:pt-32"
			>
				<div className="container mx-auto">
					<SectionHeading animated={false} title="My Works" watermark="Works" />
					<PortfoliosSection />
				</div>
			</SectionWrapper>
			{/* End Portfolios Section */}

			{/* Start Reviews Section */}
			<SectionWrapper
				name="section-reviews"
				className="reviews-section pt-24 lg:pt-28 xl:pt-32"
			>
				<div className="container mx-auto">
					<SectionHeading animated={false} title="Client Reviews" watermark="Reviews" />
					<ReviewsSection />
				</div>
			</SectionWrapper>
			{/* End Reviews Section */}

			{/* Start Contact Section */}
			<SectionWrapper
				name="section-contact"
				className="contact-section pt-24 lg:pt-28 xl:pt-32"
			>
				<div className="container mx-auto">
					<SectionHeading animated={false} title="Contact Us" watermark="Contact" />
					<ContactSection />
				</div>
			</SectionWrapper>
			{/* End Contact Section */}

			<span className="block pb-24 lg:pb-28 xl:pb-32"></span>
		</React.Fragment>
	);
};

export default Homepage2;
