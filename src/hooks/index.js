import { useEffect, useReducer } from 'react';

export const usePersistedReducer = (
    reducerFn,
    initialState,
    localStorageKey
) => {
    const [state, dispatcher] = useReducer(reducerFn, initialState, initial => {
        const persistentState = localStorage.getItem(localStorageKey);
        return persistentState ? JSON.parse(persistentState) : initial;
    });

    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(state));
    }, [state, localStorageKey]);

    return [state, dispatcher];
};
