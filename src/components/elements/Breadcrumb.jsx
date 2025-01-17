import Link from "next/link";

const Breadcrumb = ({ title, paths, blurred }) => {
	return (
		<div className="breadcrumb-wrap relative">
			{!blurred && <div className="breadcrumb-bg absolute left-0 top-0 h-full w-full"></div>}
			<div
				className={`relative z-20 bg-grey-darken pt-[73px] ${
					blurred ? "bg-opacity-20" : "bg-opacity-90"
				}`}
			>
				<div className="container mx-auto">
					<div className="breadcrumb py-16 text-center lg:py-20">
						<h2 className="capitalize text-primary">{title}</h2>
						{Array.isArray(paths) && paths.length && (
							<ul className="mb-0 inline-flex list-none flex-wrap justify-center gap-x-2 pl-0">
								{paths.map((path) => (
									<li className="inline-block capitalize" key={path.name}>
										{path.link ? (
											<Link
												href={path.link}
												className="text-heading hover:text-primary"
											>
												{path.name}
											</Link>
										) : (
											path.name
										)}
									</li>
								))}
							</ul>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Breadcrumb;
