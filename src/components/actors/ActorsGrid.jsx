import ActorCard from './ActorCard';

const ActorsGrid = ({ actors }) => {
    return (
        <div>
            {actors.map((obj, i) => (
                <ActorCard key={i} actor={obj.person} />
            ))}
        </div>
    );
};

export default ActorsGrid;
