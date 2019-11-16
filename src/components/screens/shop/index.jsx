import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { useFetch } from '../../../components/hooks';
import { updateCategory, updateBrands, updateColors } from '../../../store/actions';
import Filters from './components/filters';

function Shop(props) {
	const category = useFetch('http://test-api.ipromote.ru/API/CATEGORY/FIND');
	const brands = useFetch('http://test-api.ipromote.ru/API/BRAND/FIND');
	const colors = useFetch('http://test-api.ipromote.ru/API/COLOR/FIND');
	const dispatcher = useDispatch();

	const { code: activeBrand } = props.match.params;

	useEffect(()=>{
		dispatcher({
			type: updateCategory.getType(),
			payload: {
				response: category.response,
				error: category.error,
				isLoading: category.isLoading
			},
		});
	}, [category.response, category.error, category.isLoading]);

	useEffect(()=>{
		dispatcher({
			type: updateBrands.getType(),
			payload: {
				response: brands.response,
				error: brands.error,
				isLoading: brands.isLoading
			},
		});
	}, [brands.response, brands.error, brands.isLoading]);

	useEffect(()=>{
		dispatcher({
			type: updateColors.getType(),
			payload: {
				response: colors.response,
				error: colors.error,
				isLoading: colors.isLoading
			},
		});
	}, [colors.response, colors.error, colors.isLoading]);




	return (
		<React.Fragment>
			<Filters
				activeBrand={ activeBrand }
				categoryList={ category.response.data || []}
				brandList={ brands.response.data || []}
				colorList={ colors.response.data || []}
			/>
			<h1>Shop</h1>
		</React.Fragment>
	)

}

export default withRouter(Shop);
