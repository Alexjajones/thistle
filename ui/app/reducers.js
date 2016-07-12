import { combineReducers } from 'redux';

const defaultBag = {showing: false, items: []};

const bag = (state = defaultBag, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return Object.assign({}, state, {items: [...state.item, action.item]});
        case 'REMOVE_ITEM':
            return;
        case 'UPDATE_ITEM':
            return;
        case 'TOGGLE_BAG':
            return Object.assign({}, state, {showing: !state.showing});
        default:
            return state;
    }
};

const App = combineReducers({
    bag
});

export default App;