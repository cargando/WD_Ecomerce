import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';
// import PropTypes from 'prop-types';

// Products.propTypes = {
//
// };

const SERVER_URL = 'http://test-api.ipromote.ru/img/';

function Products(props) {
	const activeFilters = useSelector(state => state.app.filters || {});
	const goodsList = useSelector(state => state.app.goods.response || {});
	const categoryList = useSelector(state => state.app.categories.response || {});

	const { code: activeBrand = ''} = props.match.params;

	const filterGoods = (list) => {
		const {
			brand = {},
			color = {},
			price = {}
		} = activeFilters;

		if (!Object.keys(brand).length && !Object.keys(color).length && !Object.keys(price).length && !activeBrand) {
			return list;
		}
		let categoryId = null;
		(categoryList.data || []).forEach(item => {
			if (item.url === activeBrand) {
				categoryId = item.id;
			}});

		return list.filter(item => (brand[item.id] || color[item.id] || price[item.id] || categoryId === item.category))
	};

	const renderGoods = list => list.map(item => (
		<div key={ item.id } className="col-12 col-sm-6 col-md-12 col-xl-6">
			<div className="single-product-wrapper">
				<div className="product-img">
					<img src={ `${ SERVER_URL }${ item.img_url }` } alt="" />
					<img className="hover-img" src="img/product-img/product2.jpg" alt="" />
				</div>

				<div className="product-description d-flex align-items-center justify-content-between">
					<div className="product-meta-data">
						<div className="line"></div>
						<p className="product-price">${ item.price }</p>
						<a href="product-details.html">
							<h6>{ item.title }</h6>
						</a>
					</div>
					<div className="ratings-cart text-right">
						<div className="ratings">
							<i className="fa fa-star" aria-hidden="true"></i>
							<i className="fa fa-star" aria-hidden="true"></i>
							<i className="fa fa-star" aria-hidden="true"></i>
							<i className="fa fa-star" aria-hidden="true"></i>
							<i className="fa fa-star" aria-hidden="true"></i>
						</div>
						<div className="cart">
							<a href="cart.html" data-toggle="tooltip" data-placement="left" title=""
							   data-original-title="Add to Cart">
								<img src="/img/core-img/cart.png" alt="" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	));

	return (
		<div className="row">
			{
				renderGoods(filterGoods(goodsList.data || []))
			}
		</div>);
}

export default React.memo(withRouter(Products));
