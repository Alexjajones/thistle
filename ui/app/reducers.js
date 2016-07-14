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

const store = combineReducers({
    bag: bag
});

export default createStore(store);