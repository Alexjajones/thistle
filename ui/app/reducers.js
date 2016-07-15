import { combineReducers, createStore } from 'redux';

const bag = (state = {showing: false, items: []}, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return Object.assign({}, {showing: state.showing, items: [...state.items, action.item]});
        case 'REMOVE_ITEM':
            return;
        case 'UPDATE_ITEM':
            return;
        case 'TOGGLE_BAG':
            return Object.assign({}, {showing: !state.showing, items: state.items});
        default:
            return state;
    }
};

var productsInitState = [{
    name: 'Really nice thing eee',
    price: '2.52',
    category: 'Gift Card',
    id: 0
}, {
    name: 'Really nice thing',
    price: '2.52',
    category: 'Gift Card',
    id: 1
}, {
    name: 'Really nice thing',
    price: '2.52',
    category: 'Gift Card',
    id: 2
}, {
    name: 'Really nice thing',
    price: '2.52',
    category: 'Gift Card',
    id: 4
}, {
    name: 'Really nice thing',
    price: '2.52',
    category: 'Gift Card',
    id: 5
}, {
    name: 'Really nice thing',
    price: '2.52',
    category: 'Gift Card',
    id: 6
}];

const products = (state = productsInitState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const store = combineReducers({
    bag,
    products
});

export default createStore(store);