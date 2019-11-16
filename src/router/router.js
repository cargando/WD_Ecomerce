import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom'; //  , Switch
import * as URL from './url';
import Home from '../components/screens/home';
// import Shop from '../components/screens/shop';
// import Cart from '../components/screens/cart';

const Shop = lazy(() => import('../components/screens/shop'));
const Cart = lazy(() => import('../components/screens/cart'));
// const Beds = lazy(() => import('../components/screens/cart/beds'));

export default (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route exact path={ URL.SHOP } component={Shop} />
		<Route exact path={ URL.CART } component={Cart} />
		<Route exact path={ URL.PROD_DETAILS_C } component={Home} />
	</Switch>);
