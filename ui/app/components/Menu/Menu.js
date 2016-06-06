import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute } from 'react-router'

class Menu extends Component {
    render() {
        var menuItems = [
            {name: 'NEW', link: 'new'},
            {name: 'SHOP', link: 'shop'},
            {name: 'ETSY', url: 'https://www.etsy.com/uk/shop/ThistlePaperCo'},
            {name: 'BLOG', link: 'blog'}
        ];

        var items = menuItems.map((item) => {
            if (item.url) {
                return <a className="menu-item" target="_blank" href={item.url} key={item.name}>{item.name}</a>
            }
            else {
                return <Link className="menu-item" to={'/' + item.link} key={item.name}>{item.name}</Link>
            }
        });

        return (
            <div className="menu">
                {items}
            </div>
        )
    }
}

export default Menu