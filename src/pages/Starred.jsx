import { useQuery } from '@tanstack/react-query';
import { useStarredShows } from '../hooks';
import { getShowsByIds } from '../utils';

import StarredShowsGrid from '../components/shows/StarredShowsGrid';
import { TextCenter } from '../components/styles/common/TextCenter';
import Loader from '../components/styles/common/Loader';
import FlexGrid from '../components/styles/common/FlexGrid';

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

    if (status === 'loading') return (
        <FlexGrid>
            <Loader />;
        </FlexGrid>
    );

    if (status === 'error') return <TextCenter>{starredShowsError.message}</TextCenter>;

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
