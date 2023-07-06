import { getImageSource } from '../../utils';

const ShowDetails = ({ showData }) => {
    const { name, rating, image, summary, genres } = showData;

    return (
        <div>
            <img src={getImageSource(image?.original)} />
            <div>
                <h1>{name}</h1>
                <div>{rating?.average || 'N/A'}</div>
                <div dangerouslySetInnerHTML={{ __html: summary }} />
                <div>
                    Genres:{' '}
                    {Array.isArray(genres) &&
                        genres.map(g => <span key={g}>{g}</span>)}
                </div>
            </div>
        </div>
    );
};

export default ShowDetails;
