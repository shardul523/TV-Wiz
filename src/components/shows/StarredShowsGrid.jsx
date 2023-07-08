import ShowCard from './ShowCard';

const StarredShowsGrid = ({ shows, dispatch }) => {
    const isStarred = id => {
        for (let show of shows) if (show.show.id === id) return true;
        return false;
    };

    return (
        <div>
            {shows?.map((ob, i) => (
                <ShowCard
                    key={i}
                    show={ob.show}
                    isStarred={isStarred}
                    dispatch={dispatch}
                />
            ))}
        </div>
    );
};

export default StarredShowsGrid;
