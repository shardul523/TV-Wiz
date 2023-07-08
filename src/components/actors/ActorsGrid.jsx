import ActorCard from './ActorCard';
import FlexGrid from '../styles/common/FlexGrid';

const ActorsGrid = ({ actors }) => {
    return (
        <FlexGrid>
            {actors.map((obj, i) => (
                <ActorCard key={i} actor={obj.person} />
            ))}
        </FlexGrid>
    );
};

export default ActorsGrid;
