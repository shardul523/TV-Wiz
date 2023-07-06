import { getImageSource } from '../../utils';

const ActorCard = ({ actor }) => {
    const { name, image, birthday, deathday, gender, country } = actor;

    return (
        <div>
            <div>
                <img src={getImageSource(image?.medium)} />
            </div>
            <h2>
                {name} {!!gender && `(${gender})`}
            </h2>
            {!!country && <p>Comes from {country.name}</p>}
            {!!birthday && <p>Born: {birthday}</p>}
            <p>{deathday ? `Died: ${deathday}` : 'Alive'}</p>
        </div>
    );
};

export default ActorCard;
