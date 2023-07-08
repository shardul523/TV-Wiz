import { useState } from 'react';

import { useSearchQuery } from '../hooks';
import { CustomRadioInput } from './RadioInput';
import {
    RadiosWrapper,
    SearchButtonWrapper,
    SearchInput,
} from './styles/SearchForm.styled';

const SearchForm = ({ searchHandler }) => {
    const [searchQuery, setSearchQuery] = useSearchQuery();
    const [searchOption, setSearchOption] = useState('shows');

    const onSubmitHandler = event => {
        event.preventDefault();
        event.target[0].blur();
        console.log(event);
        const request = {
            query: searchQuery,
            option: searchOption,
        };

        searchHandler(request);
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <SearchInput
                onChange={e => setSearchQuery(e.target.value)}
                value={searchQuery}
            />
            <RadiosWrapper>
                <CustomRadioInput
                    label={'Shows'}
                    type="radio"
                    name="search-option"
                    value="shows"
                    checked={searchOption === 'shows'}
                    onChange={() => setSearchOption('shows')}
                />
                <CustomRadioInput
                    label={'Actors'}
                    type="radio"
                    name="search-option"
                    value="actors"
                    checked={searchOption === 'actors'}
                    onChange={() => setSearchOption('actors')}
                />
            </RadiosWrapper>
            <SearchButtonWrapper>
                <button type="submit">Search</button>
            </SearchButtonWrapper>
        </form>
    );
};

export default SearchForm;
