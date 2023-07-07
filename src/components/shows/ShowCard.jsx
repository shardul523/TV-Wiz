//import { Link } from 'react-router-dom';
import { usePersistedReducer } from '../../hooks';
import { getImageSource, htmlParser } from '../../utils';

const starrer = (currStarredShows, { type, showId }) => {
    switch (type) {
        case 'STAR':
            return currStarredShows?.concat(showId);
        case 'UNSTAR':
            return currStarredShows?.filter(currId => currId !== showId);
        default:
            return currStarredShows;
    }
};

const ShowCard = ({ show }) => {
    const { name, image, summary, id } = show;
    const shownImage = getImageSource(image?.medium);
    const croppedSummary = summary ? htmlParser(summary) : 'No summary';

    const [starredShows, dispatchStarrer] = usePersistedReducer(
        starrer,
        [],
        'Starred Shows'
    );

    const isStarred = starredShows.includes(id);

    const displayShow = () => open(`/show/${id}`);

    const onClickDispatch = (type, showId) =>
        dispatchStarrer({
            type,
            showId,
        });

    return (
        <div>
            <h2>{name}</h2>
            <div>
                <img src={shownImage} />
            </div>
            <div>{croppedSummary}</div>
            <button type="button" onClick={displayShow}>
                Read More
            </button>
            {/* <Link to={`/show/${id}`}>Read More</Link> */}
            {/* {isStarred && (
                <button
                    type="button"
                    onClick={() =>
                        dispatchStarrer({
                            type: 'STAR',
                            showId: id,
                        })
                    }
                >
                    Unstar
                </button>
            )}
            {!isStarred && (
                <button
                    type="button"
                    onClick={() =>
                        dispatchStarrer({
                            type: 'STAR',
                            showId: id,
                        })
                    }
                >
                    Star
                </button>
            )} */}
            <button
                type="button"
                onClick={() =>
                    onClickDispatch(isStarred ? 'UNSTAR' : 'STAR', id)
                }
            >
                {!isStarred ? 'Favorite' : 'Unfavorite'}
            </button>
        </div>
    );
};

export default ShowCard;
