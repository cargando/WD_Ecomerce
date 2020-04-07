// import React  from 'react';
import { createAction } from 'redux-act';


export const updateFilter = createAction('updateFilter');
export const updateItemsOnPage = createAction('updateItemsOnPage');
export const updateCategory = createAction('updateCategory');
export const updateBrands = createAction('updateBrands');
export const updateRanges = createAction('updateRanges');
export const updateColors = createAction('updateColors');
export const updateCart = createAction('updateCart');
export const updateGoods = createAction('updateGoods');
export const updateCartCounter = createAction('updateCartCounter');
export const deleteItemFromCart = createAction('deleteItemFromCart');

// export const loadCategories = async () => {
//
// 	return dispatch => {
// 		const data = fetch('http://test-api.ipromote.ru/API/CATEGORY/FIND');
//
// 		data.
// 		then((data) => { // async (data) => { ...
// 			return data.json();
// 		}).then( (data) => {
// 			// this.setState({ moviesList: data });
// 			dispatch(updateMovies(data));
// 			dispatch(updateLoadingState(false));
// 		}).
// 		catch((e) => {
// 			console.log("ERROR while loading data from url", e);
// 		});
//
// 	}
// }
