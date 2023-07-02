import { useState } from 'react';

import { searchActors, searchShows } from '../utils';
import SearchForm from '../components/SearchForm';

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

        if (!apiData || (apiData.length && apiData.length > 0)) return null;

        if (apiData[0].shows)
            return apiData.map(data => (
                <div key={data.show.id}>{data.show.name}</div>
            ));
        else console.log(apiData);
    };

    return (
        <>
            <SearchForm searchHandler={searchHandler} />
            <div>{renderApiData()}</div>
        </>
    );
};

export default Home;
