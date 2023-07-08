import { useStarredShows } from '../../hooks';

import ShowCard from './ShowCard';
import FlexGrid from '../styles/common/FlexGrid';

const ShowsGrid = ({ shows }) => {
    const [starredShows, dispatchStarrer] = useStarredShows();

    const isStarred = id => starredShows.includes(id);

    return (
        <FlexGrid>
            {shows?.map((ob, i) => (
                <ShowCard
                    key={i}
                    show={ob.show}
                    isStarred={isStarred}
                    dispatch={dispatchStarrer}
                />
            ))}
        </FlexGrid>
    );
};

export default ShowsGrid;
