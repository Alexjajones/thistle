// Run using json-server --watch mockapi.js

module.exports = function ()
{
    var faker = require("faker");

    return {
        products: times(10, function (n)
        {
            return {
                id: n,
                name: faker.commerce.productName(),
                description: faker.lorem.paragraph(),
                color: faker.commerce.color(),
                price: faker.commerce.price(),
                material: faker.commerce.productMaterial(),
                createdAt: faker.date.recent(),
                image: faker.image.cats()
            }
        }),
        featured: times(5, function (n)
        {
            return {
                id: n,
                name: faker.commerce.productName(),
                description: faker.lorem.paragraph(),
                color: faker.commerce.color(),
                price: faker.commerce.price(),
                material: faker.commerce.productMaterial(),
                createdAt: faker.date.recent(),
                image: faker.image.cats()
            }
        })
    };

    function times(n, func)
    {
        var accum = [];

        for (var i = 0; i < n; i++)
            accum[i] = func(i);

        return accum;
    }
};