const sortPostByDate = (a, b) => {
    return new Date(b.date) - new Date(a.date);
};

const filterPostsByPage = (arr, page, limit) => {
    return arr.slice(limit * page - limit, limit * page);
};

const createSlug = (string) => {
    return string.split(" ").join("-").toLowerCase();
};

export { sortPostByDate, filterPostsByPage, createSlug };
