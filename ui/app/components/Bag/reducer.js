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
            let newItems = m.removeProduct(state.items, action.item.id);
            return Object.assign({}, state, {items: newItems, total: m.calcTotal(newItems)});

        case t.UPDATE:
            return state;

        case t.EMPTY:
            return state;

        case t.TOGGLE:
            return Object.assign({}, {showing: !state.showing, items: state.items});

        default:
            return state;
    }
};