import { styled } from 'styled-components';
import ShowCast from './ShowCast';
import ShowInfo from './ShowInfo';
import ShowSeasons from './ShowSeasons';
import { InfoBlock } from '../styles/Show.styled';

const ShowDetails = ({ showData }) => {
    const { language, status, premiered } = showData;

    return (
        <>
            <ShowInfo showData={showData} />
            <InfoBlock>
                <h2>Details</h2>
                <DetailsWrapper>
                    <p>Language: {language || 'N/A'}</p>
                    <p>Status: {status}</p>
                    <p>Premiered: {premiered}</p>
                </DetailsWrapper>
            </InfoBlock>
            <InfoBlock>
                <h2>Seasons</h2>
                <ShowSeasons seasons={showData?._embedded?.seasons} />
            </InfoBlock>
            <InfoBlock>
                <h2>Cast</h2>
                <ShowCast cast={showData?._embedded?.cast} />
            </InfoBlock>
        </>
    );
};

export default ShowDetails;

const DetailsWrapper = styled.div`
    p {
        margin: 5px 0;
    }
`;
