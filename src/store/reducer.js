import { createReducer } from 'redux-act';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as toastrReducer } from 'react-redux-toastr';
import * as actions from './actions';

import { ReactComponent as Image1 } from "../assets/img/pro-big-1.jpg";
import { ReactComponent as Image2 } from "../assets/img/pro-big-2.jpg";
import { ReactComponent as Image3 } from "../assets/img/pro-big-3.jpg";

const dataStub = [
	{
		id: 102,
		img: {
			small: Image1,
			large: "../assets/img/pro-big-3.jpg",
		},
		title: 'White Modern Chair',
		price: 130,
		cnt: 1,
		max: 5,
	},
	{
		id: 105,
		img: {
			small: Image2,
			large: '',
		},
		title: 'Minimal Plant Pot',
		price: 10,
		cnt: 1,
		max: 10,
	},
	{
		id: 113,
		img: {
			small: Image3,
			large: '',
		},
		title: 'White Plant Pot',
		price: 15,
		cnt: 2,
		max: 8,
	}
];

const initialState = {
	goods: [],
	cart: dataStub,
	isSearchOpen: false,
	favorite: {},
};

const rootReducer = createReducer({
	[actions.updateCart]: (state, payload) => ({ ...state, cart: payload}),
	[actions.deleteItemFromCart]: (state, payload) => {
		const filtered = state.cart.filter( item => item.id != payload.id);

		return {
			...state,
			cart: filtered,
		}
	},
	[actions.updateCartCounter]: (state, payload) => {
		const filtered = state.cart.filter( item => item.id == payload.id);
		if (!filtered.length || filtered.length > 1) {
			console.log("Cart Reducer: shit on me");
			return state;
		}
		filtered[0].cnt = payload.cnt;
		return {
			...state,
			cart: [ ...state.cart ],
		};
	}
	}, initialState);

export default history => combineReducers({
	router: connectRouter(history),
	app: rootReducer,
	toastr: toastrReducer,
})



