const calcTotal = (items) => {
    var total = 0;

    items.forEach(item => total += parseFloat(item.price));
    
    return total.toFixed(2);
};


export default {calcTotal};