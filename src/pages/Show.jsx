import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getShowById } from '../utils';
import ShowDetails from '../components/shows/ShowDetails';

const Show = () => {
    const { showId } = useParams();
    const { data, error, status } = useQuery({
        queryKey: ['show', showId],
        queryFn: () => getShowById(showId),
    });

    if (status === 'loading') return <div>Loading...</div>;

    if (status === 'error') return <div>Error: {error.message}</div>;

    console.log(data);

    return (
        <div>
            <ShowDetails showData={data} />
        </div>
    );
};

export default Show;
