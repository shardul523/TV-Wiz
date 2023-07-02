import { useState } from 'react';

const SearchForm = ({ searchHandler }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchOption, setSearchOption] = useState('shows');

    const onSubmitHandler = event => {
        event.preventDefault();
        const request = {
            query: searchQuery,
            option: searchOption,
        };

        searchHandler(request);
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <input onChange={e => setSearchQuery(e.target.value)} />
            <label>
                <input
                    type="radio"
                    name="search-option"
                    value="shows"
                    checked={searchOption === 'shows'}
                    onChange={() => setSearchOption('shows')}
                />{' '}
                Shows
            </label>
            <label>
                <input
                    type="radio"
                    name="search-option"
                    value="actors"
                    checked={searchOption === 'actors'}
                    onChange={() => setSearchOption('actors')}
                />{' '}
                Actors
            </label>
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchForm;
