import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './modules/App';
import Home from './modules/Home';
import Product from './modules/Product';
import Cart from './modules/Cart';
import Checkout from './modules/Checkout';
import CheckoutComplete from './modules/CheckoutComplete';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    	<IndexRoute component={Home}/>
  		<Route path="/product/:id" component={Product}/>
    	<Route path="/cart" component={Cart}/>
    	<Route path="/checkout" component={Checkout}/>
    	<Route path="/checkout/complete/:orderNo" component={CheckoutComplete}/>
    </Route>
  </Router>
), document.getElementById('app'));
