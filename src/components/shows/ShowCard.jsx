//import { Link } from 'react-router-dom';
import { getImageSource, htmlParser } from '../../utils';

const ShowCard = ({ show, isStarred, dispatch }) => {
    const { name, image, summary, id } = show;
    const shownImage = getImageSource(image?.medium);
    const croppedSummary = summary ? htmlParser(summary) : 'No summary';

    const displayShow = () => open(`/show/${id}`);

    const dispatchCaller = () => {
        const type = isStarred(id) ? 'UNSTAR' : 'STAR';
        dispatch({ type, showId: id });
    };

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
            <button onClick={dispatchCaller}>
                {isStarred(id) ? 'Unfavorite' : 'Favorite'}
            </button>
        </div>
    );
};

export default ShowCard;
