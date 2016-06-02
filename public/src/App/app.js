var menuItems = [{name: 'NEW', url: 'new'}, {name: 'SHOP', price: 'shop'}, {name: 'GIFT VOUCHERS', price: 'gift-vouchers'}, {name: 'SALE', price: 'sale'}, {name: 'BLOG'}];
React.render(React.createElement(Menu, {items: menuItems}), document.getElementById('menu'));

var products = [{name: 'Lovely Picture', price: '13.41', category: 'Gift Card'}, {name: 'Really nice thing', price: '2.52', category: 'Gift Card'}, {name: 'Lovely Picture', price: '13.41', category: 'Gift Card'}, {name: 'Really nice thing', price: '2.52', category: 'Gift Card'}];
React.render(React.createElement(ProductList, {items: products}), document.getElementById('content'));