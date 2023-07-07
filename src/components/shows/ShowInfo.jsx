import { getImageSource } from "../../utils";

const ShowInfo = ({ showData }) => {
    const { name, rating, summary, genres, language, premiered, ended, image } =
        showData;

    return (
        <div>
            <div>
                <img src={getImageSource(image?.original)} />
            </div>
            <h1>{name}</h1>
            <div>{rating?.average || 'N/A'}</div>
            <div dangerouslySetInnerHTML={{ __html: summary }} />
            <div>
                Genres:{' '}
                {Array.isArray(genres) &&
                    genres.map(g => <span key={g}>{g}</span>)}
            </div>
            <div>Language: {language || 'N/A'}</div>
            <div>
                Aired: {premiered} - {ended}
            </div>
        </div>
    );
};

export default ShowInfo;
