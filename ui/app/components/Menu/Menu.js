import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute } from 'react-router'

class Menu extends Component {
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

export default Menu