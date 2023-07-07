const ShowSeasons = ({ seasons }) => {
    const totalEpisodes = seasons?.reduce(
        (acc, season) => acc + season.episodeOrder,
        0
    );

    return (
        <div>
            <h2>Seasons</h2>
            <p>Number of seasons: {seasons?.length || 'N/A'}</p>
            <p>Number of Episodes: {totalEpisodes || 'N/A'}</p>
            <div>
                {seasons.map((season, i) => (
                    <div key={season?.id || i}>
                        <h3>Season {season?.number}</h3>
                        <p>No. of Episodes: {season?.episodeOrder}</p>
                        <p>
                            Aired: {season?.premiereDate || 'N/A'} -{' '}
                            {season?.endDate}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShowSeasons;
