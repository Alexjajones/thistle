import t from './actionTypes';

export const add = (product) => ({
    type: t.ADD,
    item: {product}
});
