import RootClientLayout from "@/components/utils/RootClientLayout";
import BackToTop from "./_components/BackToTop";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import "normalize.css";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/globals.scss";

export const metadata = {
	title: {
		template: "%s | Vulovic",
		default: "Vulovic",
	},
	description:
		"Vulovic - is a creative personal portfolio React template build with NextJS and Tailwindcss.",
	keywords: "React Template, Portfolio Template",
	author: "Dimitrije Vulovic",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<RootClientLayout>
				<body className="wrapper relative min-h-screen w-full bg-grey blurredBg">
					<Header />
					<main className="page-content relative bg-grey bg-opacity-95 backdrop-blur-lg backdrop-filter">
						<div className="bglines fixed left-0 top-0 z-20 flex h-screen w-full justify-around">
							<span className="border-r border-white border-opacity-5"></span>
							<span className="border-r border-white border-opacity-5"></span>
							<span className="border-r border-white border-opacity-5"></span>
							<span className="border-r border-white border-opacity-5"></span>
							<span className="border-r border-white border-opacity-5"></span>
						</div>
						<div className="sitedata relative z-30 min-h-screen">{children}</div>
					</main>
					<Footer />
					<BackToTop />
				</body>
			</RootClientLayout>
		</html>
	);
}

