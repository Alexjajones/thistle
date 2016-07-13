//import { combineReducers, createStore } from 'redux';
const { combineReducers, createStore } = Redux;

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

const App = combineReducers({
    bag: bag
});

var store = createStore(App);

store.bag.subscribe();

store.dispatch({
    type: 'ADD_ITEM',
    item: {name: 'test123'}
});


store.dispatch({
    type: 'TOGGLE_BAG'
});

console.log(store.getState());

//export default App;