import t from './actionTypes';

// MOVE TO SELECTORS
export const getAll = () => ({
    type: t.GET_ALL
});

export const get = (id) => ({
    type: t.GET,
    id
});

export const updateList = (products) => ({
    type: t.UPDATE_LIST,
    products
});