import t from './actionTypes';
import m from './model';

var initState = {
    showing: false,
    items: [],
    total: 0
};

export default (state = initState, action) => {
    switch (action.type) {
        case t.ADD:
            let items = [...state.items, action.item];
            return Object.assign({}, state, {items: items, total: m.calcTotal(items)});
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