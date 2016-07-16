export const get = (id, products) => {
    return products.filter(p => p.id == id)[0];
};