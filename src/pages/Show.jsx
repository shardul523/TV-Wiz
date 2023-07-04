import { useParams } from 'react-router-dom';

const Show = () => {
    const { showId } = useParams();
    return <div>Show with show id {showId}</div>;
};

export default Show;
