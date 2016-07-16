import { combineReducers, createStore } from 'redux';
import bag from './components/Bag/index';

const products = (state = productsInitState, action) => {
    switch (action.type) {
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

const store = combineReducers({
    [bag.constants.NAME]: bag.reducer,
    products
});

export default createStore(store);