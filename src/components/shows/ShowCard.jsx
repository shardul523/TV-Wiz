import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { getImageSource, htmlParser } from '../../utils';
import { ActionSection, StarBtn } from '../styles/ShowCard.styled';
import { SearchImgWrapper, SearchCard } from '../styles/common/SearchCard';
import { StarIcon } from '../styles/common/StarIcon';

const ShowCard = ({ show, isStarred, dispatch }) => {
    const { name, image, summary, id } = show;
    const shownImage = getImageSource(image?.medium);
    const croppedSummary = summary ? htmlParser(summary) : 'No summary';

    const starBtnRef = useRef();

    const dispatchCaller = () => {
        const type = isStarred(id) ? 'UNSTAR' : 'STAR';
        dispatch({ type, showId: id });
    };

    const handleStarClick = () => {
        dispatchCaller();

        if (!starBtnRef) return;

        if (isStarred(id)) starBtnRef.current.classList.remove('animate');
        else starBtnRef.current.classList.add('animate');
    };

    return (
        <SearchCard>
            <SearchImgWrapper>
                <img src={shownImage} />
            </SearchImgWrapper>
            <h1>{name}</h1>
            <p>{croppedSummary}</p>
            <ActionSection>
                <Link to={`/show/${id}`} >Read more</Link>
                <StarBtn onClick={handleStarClick} ref={starBtnRef}>
                    <StarIcon active={isStarred(id)} />
                </StarBtn>
            </ActionSection>
        </SearchCard>
    );
};

export default ShowCard;
