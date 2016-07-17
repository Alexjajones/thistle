import { combineReducers, createStore } from 'redux';
import bag from './components/Bag/index';

const products = (state = productsInitState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

var productsInitState = [{
    name: 'Really nice thing',
    price: '2.52',
    category: 'Gift Card',
    format: '10cm x 20cm',
    description: '10 cards',
    image: 'https://m.riflepaperco.com/media/catalog/product/cache/1/thumbnail/1170x1248/fb193eecb19491ee2d70d1d38e002e96/g/c/gct027-01_1.jpg',
    id: 0

}, {
    name: 'Really nice thing',
    price: '2.52',
    category: 'Gift Card',
    format: '10cm x 20cm',
    description: '10 cards',
    image: 'https://m.riflepaperco.com/media/catalog/product/cache/1/thumbnail/1170x1248/fb193eecb19491ee2d70d1d38e002e96/g/c/gct027-01_1.jpg',
    id: 1

}, {
    name: 'Really nice thing',
    price: '2.52',
    category: 'Gift Card',
    format: '10cm x 20cm',
    description: '10 cards',
    image: 'https://m.riflepaperco.com/media/catalog/product/cache/1/thumbnail/1170x1248/fb193eecb19491ee2d70d1d38e002e96/g/c/gct027-01_1.jpg',
    id: 2

}, {
    name: 'Really nice thing',
    price: '2.52',
    category: 'Gift Card',
    format: '10cm x 20cm',
    description: '10 cards',
    image: 'https://m.riflepaperco.com/media/catalog/product/cache/1/thumbnail/1170x1248/fb193eecb19491ee2d70d1d38e002e96/g/c/gct027-01_1.jpg',
    id: 3

}, {
    name: 'Really nice thing',
    price: '2.52',
    category: 'Gift Card',
    format: '10cm x 20cm',
    description: '10 cards',
    image: 'https://m.riflepaperco.com/media/catalog/product/cache/1/thumbnail/1170x1248/fb193eecb19491ee2d70d1d38e002e96/g/c/gct027-01_1.jpg',
    id: 4

}, {
    name: 'Really nice thing',
    price: '2.52',
    category: 'Gift Card',
    format: '10cm x 20cm',
    description: '10 cards',
    image: 'https://m.riflepaperco.com/media/catalog/product/cache/1/thumbnail/1170x1248/fb193eecb19491ee2d70d1d38e002e96/g/c/gct027-01_1.jpg',
    id: 5

}];

const store = combineReducers({
    [bag.constants.NAME]: bag.reducer,
    products
});

export default createStore(store);