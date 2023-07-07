//import { Link } from 'react-router-dom';
import { getImageSource, htmlParser } from '../../utils';

const ShowCard = ({ show }) => {
    const { name, image, summary, id } = show;
    const shownImage = getImageSource(image?.medium);
    const croppedSummary = summary ? htmlParser(summary) : 'No summary';

    const displayShow = () => {
        window.open(`/show/${id}`);
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
            {/* <Link to={`/show/${id}`}>Read More</Link> */}
            <button type="button">Star</button>
        </div>
    );
};

export default ShowCard;
