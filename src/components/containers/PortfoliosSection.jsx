"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getPortfolios } from "../../fetchers";
import { Portfolio } from "../elements";
import { PortfolioFilters } from "../utils";

const PortfoliosSection = () => {
	// States
	const [visiblePortfolios, setVisiblePortfolios] = useState([]);
	const [currentFilter, setCurrentFilter] = useState("");
	const [pageNumber, setPageNumber] = useState(1);

	const { data } = useQuery("portfolios", getPortfolios);

	useEffect(() => {
		if (data) setVisiblePortfolios(data.slice(0, 6));
	}, [data]);

	// Portfolio Filter function
	const handleFilter = useCallback(
		(value) => {
			setCurrentFilter(value);
			if (value === "") {
				setVisiblePortfolios(data.slice(0, pageNumber * 6));
			} else {
				setVisiblePortfolios(
					data
						.slice(0, pageNumber * 6)
						.filter((portfolio) => portfolio.filters.includes(value))
				);
			}
		},
		[data, pageNumber]
	);

	// Load more function
	const handleLoadmore = useCallback(() => {
		setPageNumber((prevNumber) => prevNumber + 1);
		if (currentFilter === "") {
			setVisiblePortfolios(data.slice(0, (pageNumber + 1) * 6));
		} else {
			setVisiblePortfolios(
				data
					.slice(0, (pageNumber + 1) * 6)
					.filter((portfolio) => portfolio.filters.includes(currentFilter))
			);
		}
	}, [currentFilter, data, pageNumber]);

	if (!data) return null;

	return (
		<>
			<PortfolioFilters currentFilter={currentFilter} filterHandler={handleFilter} />
			<motion.div layout className="mt-12 grid grid-cols-6 gap-7">
				{visiblePortfolios?.map((portfolio) => (
					<motion.div
						layout
						exit={{ scale: 0 }}
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{
							duration: 0.4,
						}}
						className="col-span-6 sm:col-span-3 lg:col-span-2"
						key={portfolio.id}
					>
						<Portfolio portfolio={portfolio} />
					</motion.div>
				))}
			</motion.div>
			{visiblePortfolios < data ? (
				<div className="mt-12 text-center">
					<button className="btn btn-small" onClick={() => handleLoadmore()}>
						<span>Load More</span>
					</button>
				</div>
			) : null}
		</>
	);
};

export default PortfoliosSection;
