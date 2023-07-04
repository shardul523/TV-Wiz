import { useState } from 'react';

import { searchActors, searchShows } from '../utils';
import SearchForm from '../components/SearchForm';
import ShowsGrid from '../components/shows/ShowsGrid';
import ActorsGrid from '../components/actors/ActorsGrid';

const Home = () => {
    const [apiData, setApiData] = useState(null);
    const [apiError, setApiError] = useState(null);

    const searchHandler = async ({ query, option }) => {
        setApiError(null);

        try {
            let searchData = '';
            if (option === 'shows') searchData = await searchShows(query);
            else searchData = await searchActors(query);
            setApiData(searchData);
        } catch (err) {
            setApiError(err.message);
        }
    };

    const renderApiData = () => {
        if (apiError) return <h1>{apiError}</h1>;

        if (!apiData || !Array.isArray(apiData)) return null;

        if (apiData.length == 0) return <div>No results found</div>;

        console.log(apiData);

        if (apiData[0].show) return <ShowsGrid shows={apiData} />;
        else return <ActorsGrid actors={apiData} />;
    };

    return (
        <>
            <SearchForm searchHandler={searchHandler} />
            <div>{renderApiData()}</div>
        </>
    );
};

export default Home;
