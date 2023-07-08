import { useState } from 'react';

import { searchActors, searchShows } from '../utils';
import SearchForm from '../components/SearchForm';
import ShowsGrid from '../components/shows/ShowsGrid';
import ActorsGrid from '../components/actors/ActorsGrid';
import { TextCenter } from '../components/styles/common/TextCenter';
import { useQuery } from '@tanstack/react-query';

const Home = () => {
    const [request, setRequest] = useState(null);

    const searchHandler = inputReq => setRequest(inputReq);

    const { data: apiData, error: apiError } = useQuery({
        queryKey: ['search', request],
        queryFn: () =>
            request.option === 'shows'
                ? searchShows(request.query)
                : searchActors(request.query),
        enabled: !!request,
    });

    const renderApiData = () => {
        if (apiError) return <TextCenter>{apiError.message}</TextCenter>;

        if (!apiData || !Array.isArray(apiData)) return null;

        if (apiData.length == 0)
            return <TextCenter>No results found</TextCenter>;

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
