import { getImageSource } from '../../utils';
import { SearchImgWrapper, SearchCard } from '../styles/common/SearchCard';

const ActorCard = ({ actor }) => {
    const { name, image, birthday, deathday, gender, country } = actor;

    return (
        <SearchCard>
            <SearchImgWrapper>
                <img src={getImageSource(image?.medium)} />
            </SearchImgWrapper>
            <h2>
                {name} {!!gender && `(${gender})`}
            </h2>
            {!!country && <p>Comes from {country.name}</p>}
            {!!birthday && <p>Born: {birthday}</p>}
            <p>{deathday ? `Died: ${deathday}` : 'Alive'}</p>
        </SearchCard>
    );
};

export default ActorCard;
