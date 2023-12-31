import ImageNotFoundSrc from '../lib/image-not-found.png'

const BASE_URL = 'https://api.tvmaze.com';

const apiGet = async endpoint => {
    const url = `${BASE_URL}${endpoint}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

export const searchShows = query => apiGet(`/search/shows?q=${query}`);

export const searchActors = query => apiGet(`/search/people?q=${query}`);

export const getShowById = showId =>
    apiGet(`/shows/${showId}?embed[]=seasons&embed[]=cast`);

export const getShowsByIds = showIds => {
    const promises = showIds?.map(id => apiGet(`/shows/${id}`));
    return Promise.all(promises);
};

export const htmlParser = str =>
    str.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '');

export const getImageSource = image => (image ? image : ImageNotFoundSrc);
