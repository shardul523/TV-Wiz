//import { Link } from 'react-router-dom';
import { getImageSource, htmlParser } from '../../utils';
import { ActionSection, StarBtn } from '../styles/ShowCard.styled';
import { SearchImgWrapper, SearchCard } from '../styles/common/SearchCard';
import { StarIcon } from '../styles/common/StarIcon';

const ShowCard = ({ show, isStarred, dispatch }) => {
    const { name, image, summary, id } = show;
    const shownImage = getImageSource(image?.medium);
    const croppedSummary = summary ? htmlParser(summary) : 'No summary';

    const displayShow = () => open(`/show/${id}`);

    const dispatchCaller = () => {
        const type = isStarred(id) ? 'UNSTAR' : 'STAR';
        dispatch({ type, showId: id });
    };

    return (
        <SearchCard>
            <SearchImgWrapper>
                <img src={shownImage} />
            </SearchImgWrapper>
            <h1>{name}</h1>
            <p>{croppedSummary}</p>
            <ActionSection>
                <StarBtn type="button" onClick={displayShow}>
                    Read More
                </StarBtn>
                <StarBtn onClick={dispatchCaller}>
                    <StarIcon active={isStarred(id)} />
                </StarBtn>
            </ActionSection>
        </SearchCard>
    );
};

export default ShowCard;
