import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { useFetch } from '../../../components/hooks';
import * as Act from '../../../store/actions';
import Filters from './components/filters';
import { Header, Products } from "./components";

function Shop(props) {
	const catalog = useFetch('http://test-api.ipromote.ru/API/CATALOG/FIND');
	const ranges = useFetch('http://test-api.ipromote.ru/API/CATALOG/RANGE');
	const category = useFetch('http://test-api.ipromote.ru/API/CATEGORY/FIND');
	const brands = useFetch('http://test-api.ipromote.ru/API/BRAND/FIND');
	const colors = useFetch('http://test-api.ipromote.ru/API/COLOR/FIND');
	const dispatcher = useDispatch();
console.log("catalog == ", catalog);
	const { code: activeBrand } = props.match.params;

	useEffect(()=>{
		dispatcher({
			type: Act.updateGoods.getType(),
			payload: { ...catalog },
		});
	}, [catalog.response, catalog.error, catalog.isLoading]);

	useEffect(()=>{
		dispatcher({
			type: Act.updateCategory.getType(),
			payload: { ...category },
		});
	}, [category.response, category.error, category.isLoading]);

	useEffect(()=>{
		dispatcher({
			type: Act.updateBrands.getType(),
			payload: { ...brands },
		});
	}, [brands.response, brands.error, brands.isLoading]);

	useEffect(()=>{
		dispatcher({
			type: Act.updateColors.getType(),
			payload: { ...colors },
		});
	}, [colors.response, colors.error, colors.isLoading]);

	useEffect(()=>{
		dispatcher({
			type: Act.updateRanges.getType(),
			payload: { ...ranges },
		});
	}, [ranges.response, ranges.error, ranges.isLoading]);




	return (
		<React.Fragment>
			<Filters />
			<div className="amado_product_area section-padding-100">
				<div className="container-fluid">
					<Header />
					<Products />
				</div>
			</div>
		</React.Fragment>
	)

}

export default withRouter(Shop);
