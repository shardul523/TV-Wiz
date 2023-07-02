const BASE_URL = 'https://api.tvmaze.com';

const apiGet = async endpoint => {
    const url = `${BASE_URL}${endpoint}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

export const searchShows = query => apiGet(`/search/shows?q=${query}`);
