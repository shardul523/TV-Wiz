import { useQuery } from '@tanstack/react-query';
import { useStarredShows } from '../hooks';
import { getShowsByIds } from '../utils';

import StarredShowsGrid from '../components/shows/StarredShowsGrid';
import { TextCenter } from '../components/styles/common/TextCenter';

const Starred = () => {
    const [starredShows, starredShowsDispatch] = useStarredShows();

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

    if (starredShowsData?.length)
        return (
            <StarredShowsGrid
                shows={starredShowsData}
                dispatch={starredShowsDispatch}
            />
        );

    return <TextCenter>No shows have benn marked as Favorite.</TextCenter>;
};

export default Starred;
