import { useEffect, useReducer, useState } from 'react';

const usePersistedReducer = (reducerFn, initialState, localStorageKey) => {
    const [state, dispatcher] = useReducer(reducerFn, initialState, initial => {
        const persistentState = localStorage.getItem(localStorageKey);
        return persistentState ? JSON.parse(persistentState) : initial;
    });

    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(state));
    }, [state, localStorageKey]);

    return [state, dispatcher];
};

const usePersistedState = sessionStorageKey => {
    const [state, setState] = useState(() => {
        const persistentState = sessionStorage.getItem(sessionStorageKey);
        return persistentState ? persistentState : '';
    });

    useEffect(
        () => sessionStorage.setItem(sessionStorageKey, state),
        [state, sessionStorageKey]
    );

    return [state, setState];
};

const starrer = (currStarredShows, { type, showId }) => {
    switch (type) {
        case 'STAR':
            return currStarredShows?.concat(showId);
        case 'UNSTAR':
            return currStarredShows?.filter(currId => currId !== showId);
        default:
            return currStarredShows;
    }
};

export const useStarredShows = () =>
    usePersistedReducer(starrer, [], 'Starred Shows');

export const useSearchQuery = () => usePersistedState('Search Query');
