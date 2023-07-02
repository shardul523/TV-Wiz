import { useState } from 'react';

import { searchShows } from '../utils';

const Home = () => {
    const [apiData, setApiData] = useState(null);
    const [apiError, setApiError] = useState(null);

    const searchHandler = async e => {
        e.preventDefault();
        const searchQuery = e.target[0].value;
        setApiError(null);

        try {
            const searchData = await searchShows(searchQuery);
            setApiData(searchData);
        } catch (err) {
            setApiError(err.message);
        }
    };

    const renderApiData = () => {
        if (apiError) return <h1>{apiError}</h1>;

        if (!apiData) return null;

        return apiData.map(data => (
            <div key={data.show.id}>{data.show.name}</div>
        ));
    };

    return (
        <>
            <form onSubmit={searchHandler}>
                <input />
                <button type="submit">Search</button>
            </form>
            <div>{renderApiData()}</div>
        </>
    );
};

export default Home;
