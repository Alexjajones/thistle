import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute } from 'react-router'

class App extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Container}>
                    <IndexRoute component={Home}/>
                    <Route path='new' component={Home}/>
                    <Route path='shop' component={Shop}/>
                    <Route path='etsy' component={Etsy}/>
                    <Route path='blog' component={Blog}/>
                    <Route path='*' component={NotFound}/>
                </Route>
            </Router>
        )
    }
}

const Container = (props) => (
    <div>
        <Header />
        <Nav />
        {props.children}
        <Footer />
    </div>
);

class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <div className="logo"></div>
            </div>
        )
    }
}

class Nav extends Component {
    render() {
        var menuItems = [
            {name: 'NEW', link: 'new'},
            {name: 'SHOP', link: 'shop'},
            {name: 'ETSY', link: 'etsy'},
            {name: 'BLOG', link: 'blog'}
        ];

        var items = menuItems.map(function (item) {
            return <Link className="menu-item" to={'/' + item.link} key={item.name}>{item.name}</Link>
        });

        return (
            <div className="menu">
                {items}
            </div>
        )
    }
}

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                Footer
            </div>
        )
    }
}

class ProductList extends Component {
    render() {
        var listItems = this.props.items.map(function (item) {
            return <Product item={item}/>;
        });

        return (
            <div>
                <h4>Products</h4>
                <div className="grid">
                    {listItems}
                </div>
            </div>
        )
    }
}

class Product extends Component {
    render() {
        var item = this.props.item;

        return (
            <div className="product col-1-4">
                <div className="product-inner">
                    <div className="product-name">{item.name}</div>
                    <div className="product-category">{item.category}</div>
                    <img src="images/test-product.jpg" alt="Product image"/>
                    <p className="product-price">{'£' + item.price}</p>
                </div>
            </div>
        )
    }
}

class Home extends Component {
    render() {
        var products = [{name: 'Lovely Picture', price: '13.41', category: 'Gift Card'}, {
            name: 'Really nice thing',
            price: '2.52',
            category: 'Gift Card'
        }, {name: 'Lovely Picture', price: '13.41', category: 'Gift Card'}, {
            name: 'Really nice thing',
            price: '2.52',
            category: 'Gift Card'
        }, {name: 'Lovely Picture', price: '13.41', category: 'Gift Card'}, {
            name: 'Really nice thing',
            price: '2.52',
            category: 'Gift Card'
        }, {name: 'Lovely Picture', price: '13.41', category: 'Gift Card'}, {
            name: 'Really nice thing',
            price: '2.52',
            category: 'Gift Card'
        }];

        return (
            <div>
                <h4>Home</h4>
                <ProductList items={products}/>
            </div>
        )
    }
}

const New = () => <h1>New Page</h1>
const Shop = () => <h1>Shop Page</h1>
const Etsy = () => <h1>Etsy Page</h1>
const Blog = () => <h1>Blog Page</h1>
const NotFound = () => <h1>404.. This page is not found!</h1>

export default App