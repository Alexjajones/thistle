const calcTotal = (items) => {
    var total = 0;

    items.forEach(item => total += parseFloat(item.price));

    return total.toFixed(2);
};

const removeProduct = (items, id) => {
    return items.filter(p => p.id !== id)
};

export default {calcTotal, removeProduct};