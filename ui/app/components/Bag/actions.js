import t from './actionTypes';

export const add = (product) => ({
    type: t.ADD,
    item: product
});

export const remove = (product) => ({
    type: t.REMOVE,
    item: product
});