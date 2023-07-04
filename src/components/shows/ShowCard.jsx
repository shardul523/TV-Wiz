import { Link } from 'react-router-dom';
import { getImageSource, htmlParser } from '../../utils';

const ShowCard = ({ show }) => {
    const { name, image, summary } = show;
    const shownImage = getImageSource(image);
    const croppedSummary = summary ? htmlParser(summary) : 'No summary';

    return (
        <div>
            <h2>{name}</h2>
            <div>
                <img src={shownImage} />
            </div>
            <div>{croppedSummary}</div>
            <Link to="/">Read More</Link>
            <button type="button">Star</button>
        </div>
    );
};

export default ShowCard;
