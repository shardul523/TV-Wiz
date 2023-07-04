import ShowCard from './ShowCard';

const ShowsGrid = ({ shows }) => {
    return (
        <div>
            {shows.map((ob, i) => (
                <ShowCard key={i} show={ob.show} />
            ))}
        </div>
    );
};

export default ShowsGrid;
