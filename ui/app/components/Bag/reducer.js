import t from './actionTypes';

var initState = {
    showing: false,
    items: []
};

export default (state = initState, action) => {
    switch (action.type) {
        case t.ADD:
            return Object.assign({}, {showing: state.showing, items: [...state.items, action.item]});
        case t.REMOVE:
            return state;
            return;
        case t.UPDATE:
            return state;
            return;
        case t.EMPTY:
            return state;
            return;
        case t.TOGGLE:
            return Object.assign({}, {showing: !state.showing, items: state.items});
        default:
            return state;
    }
};