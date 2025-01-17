"use client";

import { useQuery } from "react-query";
import { getPortfolioFilters } from "../../fetchers";

const PortfolioFilters = ({ currentFilter, filterHandler }) => {
	const { data } = useQuery("portfolio-filters", getPortfolioFilters);

	if (!data) return null;

	return (
		<div className="portfolio-filters flex flex-wrap justify-center gap-4">
			<button
				className={`btn btn-small ${currentFilter === "" ? "" : "btn-transparent"}`}
				onClick={() => filterHandler("")}
			>
				<span>All</span>
			</button>
			{data?.map((filter) => (
				<button
					className={`btn btn-small ${
						currentFilter === filter.value ? "before:invisible" : "btn-transparent"
					}`}
					onClick={() => filterHandler(filter.value)}
					key={filter.id}
				>
					<span>{filter.title}</span>
				</button>
			))}
		</div>
	);
};

export default PortfolioFilters;
