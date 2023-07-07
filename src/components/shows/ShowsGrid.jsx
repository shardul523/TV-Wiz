import { useStarredShows } from '../../hooks';

import ShowCard from './ShowCard';

const ShowsGrid = ({ shows }) => {
    const [starredShows, dispatchStarrer] = useStarredShows();

    const isStarred = id => starredShows.includes(id);

    return (
        <div>
            {shows?.map((ob, i) => (
                <ShowCard
                    key={i}
                    show={ob.show}
                    isStarred={isStarred}
                    dispatch={dispatchStarrer}
                />
            ))}
        </div>
    );
};

export default ShowsGrid;
