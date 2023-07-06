import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getShowById } from '../utils';

const Show = () => {
    const { showId } = useParams();
    const { data, error, status } = useQuery({
        queryKey: ['show', showId],
        queryFn: () => getShowById(showId),
    });

    if (status === 'loading') return <div>Loading...</div>;

    if (status === 'error') return <div>Error: {error.message}</div>;

    return (
        <div>
            Show with show id {showId} and name {data.name}
        </div>
    );
};

export default Show;
