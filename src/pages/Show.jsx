import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getShowById } from '../utils';
import ShowDetails from '../components/shows/ShowDetails';
import { TextCenter } from '../components/styles/common/TextCenter';
import {
    BackHomeWrapper,
    ShowPageWrapper,
} from '../components/styles/Show.styled';

const Show = () => {
    const { showId } = useParams();
    const { data, error, status } = useQuery({
        queryKey: ['show', showId],
        queryFn: () => getShowById(showId),
    });

    if (status === 'loading') return <TextCenter>Loading...</TextCenter>;

    if (status === 'error')
        return <TextCenter>Error: {error.message}</TextCenter>;

    console.log(data);

    return (
        <ShowPageWrapper>
            <BackHomeWrapper>
                <button type="button" onClick={() => window.close()}>
                    Go back to Home
                </button>
            </BackHomeWrapper>
            <ShowDetails showData={data} />
        </ShowPageWrapper>
    );
};

export default Show;
