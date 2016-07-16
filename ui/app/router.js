import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';
import store from './reducers';

console.log(store, store.getState());

// Pages
import Container from './pages/container/container'
import Home from './pages/home/home'
import Shop from './pages/shop/shop'
import Product from './pages/product/product'
import Blog from './pages/blog/blog'
import NotFound from './pages/notfound/notfound'

export default class Root extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
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
                </Provider>
            </div>
        );
    }
}
