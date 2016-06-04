import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute } from 'react-router'

import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer'

import Home from './pages/home/home'

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
        <Menu />
        {props.children}
        <Footer />
    </div>
);

const New = () => <h1>New Page</h1>
const Shop = () => <h1>Shop Page</h1>
const Etsy = () => <h1>Etsy Page</h1>
const Blog = () => <h1>Blog Page</h1>
const NotFound = () => <h1>404.. This page is not found!</h1>

export default App