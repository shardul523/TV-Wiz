import { styled } from 'styled-components';

const ShowSeasons = ({ seasons }) => {
    const totalEpisodes = seasons?.reduce(
        (acc, season) => acc + season.episodeOrder,
        0
    );

    return (
        <SeasonsWrapper>
            <p>Number of seasons: {seasons?.length || 'N/A'}</p>
            <p>Number of Episodes: {totalEpisodes || 'N/A'}</p>
            <SeasonList>
                {seasons.map((season, i) => (
                    <div key={season?.id || i} className="season-item">
                        <div className="left">
                            <h3>Season {season?.number}</h3>
                            <p>No. of Episodes: {season?.episodeOrder}</p>
                        </div>
                        <div className="right">
                            Aired: {season?.premiereDate || 'N/A'} -{' '}
                            {season?.endDate}
                        </div>
                    </div>
                ))}
            </SeasonList>
        </SeasonsWrapper>
    );
};

export default ShowSeasons;

const SeasonsWrapper = styled.div`
    p {
        margin: 5px 0;
    }
`;

const SeasonList = styled.div`
    display: flex;
    flex-direction: column;
    .season-item {
        display: flex;
        align-items: center;
        margin: 10px 0;
        /* &:last-child {
            margin-bottom: 0;
        } */
        .left {
            flex: 0 0 30%;
            border-right: 1px solid #b0b0b0;
            padding-right: 20px;
        }
        .right {
            padding-left: 20px;
            flex: 1;
        }
    }
`;
