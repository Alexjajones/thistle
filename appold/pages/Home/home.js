var menuItems = [{name: 'NEW', image: 'menu-new'}, {name: 'SHOP', image: 'menu-shop'}, {name: 'ETSY', image: 'menu-etsy'}, {name: 'BLOG', image: 'menu-blog'}];
React.render(<Menu items={menuItems}/>, document.getElementById('menu'));

var products = [{name: 'Lovely Picture', price: '13.41', category: 'Gift Card'}, {name: 'Really nice thing', price: '2.52', category: 'Gift Card'}, {name: 'Lovely Picture', price: '13.41', category: 'Gift Card'}, {name: 'Really nice thing', price: '2.52', category: 'Gift Card'}, {name: 'Lovely Picture', price: '13.41', category: 'Gift Card'}, {name: 'Really nice thing', price: '2.52', category: 'Gift Card'}, {name: 'Lovely Picture', price: '13.41', category: 'Gift Card'}, {name: 'Really nice thing', price: '2.52', category: 'Gift Card'}];

var Home = React.createClass({
    render: function () {
        return (
            <div class="Home">
                <Menu items={menuItems}/>
            </div>
        )
    }
});