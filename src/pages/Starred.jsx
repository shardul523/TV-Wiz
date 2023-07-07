import { useQuery } from '@tanstack/react-query';
import { useStarredShows } from '../hooks';
import { getShowsByIds } from '../utils';

import ShowsGrid from '../components/shows/ShowsGrid';

const Starred = () => {
    const [starredShows] = useStarredShows();

    const {
        data: starredShowsData,
        error: starredShowsError,
        status,
    } = useQuery({
        queryKey: ['starred', starredShows],
        queryFn: () =>
            getShowsByIds(starredShows).then(results =>
                results.map(show => ({ show }))
            ),
    });

    if (status === 'loading') return <div>Loading...</div>;

    if (status === 'error') return <div>{starredShowsError.message}</div>;

    if (starredShowsData?.length) return <ShowsGrid shows={starredShowsData} />;
};

export default Starred;
