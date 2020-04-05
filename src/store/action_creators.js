import * as ACT from './actions';

function updateFilter(payload) {
	return {
		action: ACT.UPDATE_FILTER,
		payload,
	}
}

function updateCatalog(payload) {
	return {
		action: ACT.UPDATE_GOODS,
		payload,
	}
}

function updateLoading(payload) {
	return {
		action: ACT.UPDATE_LOADING,
		payload,
	}

}

export const loadCatalog = async () => {

	return dispatch => {

		dispatch(updateLoading({ goods: true })); // породили action в сторону ридакса, под названием "поставь флаг загрузки товаров в тру"

		const data = fetch('http://test-api.ipromote.ru/API/CATALOG/FIND');

		data.
		then((data) => { // async (data) => { ...
			return data.json();
		}).then( (data) => {

			dispatch(updateCatalog(data)); // экшн - обновить данные в каталоге (в ридаксе)
			dispatch(updateLoading({ goods: false })); // экшен - обновить флажок загрузки, сказать что = фолз, типа загрузка завешена

		}).
		catch((e) => {
			dispatch(updateLoading({ goods: false }));
			console.log("ERROR while loading data from url", e);
		});

	}
};



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
