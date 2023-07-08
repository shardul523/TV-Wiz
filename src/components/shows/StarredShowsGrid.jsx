import ShowCard from './ShowCard';
import FlexGrid from '../styles/common/FlexGrid';

const StarredShowsGrid = ({ shows, dispatch }) => {
    const isStarred = id => {
        for (let show of shows) if (show.show.id === id) return true;
        return false;
    };

    return (
        <FlexGrid>
            {shows?.map((ob, i) => (
                <ShowCard
                    key={i}
                    show={ob.show}
                    isStarred={isStarred}
                    dispatch={dispatch}
                />
            ))}
        </FlexGrid>
    );
};

export default StarredShowsGrid;
