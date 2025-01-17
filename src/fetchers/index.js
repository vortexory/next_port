import { http } from "./http";

const getInformation = async () => {
	let res = await http.get(`/information.json`);
	return res.data;
};

const getServices = async () => {
	let res = await http.get(`/services.json`);
	return res.data;
};

const getTechskills = async () => {
	let res = await http.get(`/techskills.json`);
	return res.data;
};

const getLanguageskills = async () => {
	let res = await http.get(`/languageskills.json`);
	return res.data;
};

const getPortfolioFilters = async () => {
	let res = await http.get(`/portfoliofilters.json`);
	return res.data;
};

const getPortfolios = async () => {
	let res = await http.get(`/portfolios.json`);
	return res.data;
};

const getJobExperience = async () => {
	let res = await http.get(`/jobexperience.json`);
	return res.data;
};

const getEducationBackground = async () => {
	let res = await http.get(`/educationbackground.json`);
	return res.data;
};

const getClientReviews = async () => {
	let res = await http.get(`/clientsreview.json`);
	return res.data;
};

export {
	getClientReviews,
	getEducationBackground,
	getInformation,
	getJobExperience,
	getLanguageskills,
	getPortfolioFilters,
	getPortfolios,
	getServices,
	getTechskills,
};
