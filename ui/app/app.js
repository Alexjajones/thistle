import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute } from 'react-router'

import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer'

import Home from './pages/home/home'
import Shop from './pages/shop/shop'
import Product from './pages/product/product'

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

const Container = (props) => (
    <div>
        <Header />
        <Menu />
        {props.children}
        <Footer />
    </div>
);

const Blog = () => <h1>Blog Page</h1>;
const NotFound = () => <h1>This page is not found, go back!</h1>;

export default App