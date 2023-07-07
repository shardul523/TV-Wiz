import ShowCast from './ShowCast';
import ShowInfo from './ShowInfo';
import ShowSeasons from './ShowSeasons';

const ShowDetails = ({ showData }) => (
    <div>
        <ShowInfo showData={showData} />
        <ShowSeasons seasons={showData?._embedded?.seasons} />
        <ShowCast cast={showData?._embedded?.cast} />
    </div>
);

export default ShowDetails;
