import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute } from 'react-router'

import Container from './app'
import Home from './pages/home/home'
import Shop from './pages/shop/shop'
import Product from './pages/product/product'
import Blog from './pages/blog/blog'
import NotFound from './pages/notfound/notfound'

class App extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Container}>
                    <IndexRoute component={Home}/>
                    <Route path='new' component={Home}/>
                    <Route path='shop' component={Shop}/>
                    <Route path='shop/:id' component={Product}/>
                    <Route path='blog' component={Blog}/>
                    <Route path='*' component={NotFound}/>
                </Route>
            </Router>
        )
    }
}

export default App