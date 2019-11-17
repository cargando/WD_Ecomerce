import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { useRouteMatch } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { updateFilter } from "../../../../store/actions";
import * as URL from '../../../../router/url';

Header.propTypes = {
	
};

function Header(props) {
	const activeFilters = useSelector(state => state.app.filters || {});
	let match = useRouteMatch(URL.SHOP_C);
	const history = useHistory()
	const dispatcher = useDispatch();

	const showResetFilter = !!(Object.keys(activeFilters.brand).length || Object.keys(activeFilters.color).length || Object.keys(activeFilters.price).length || match);

	const handleResetFilters = () => {
		dispatcher({
			type: updateFilter.getType(),
			payload: {
				brand: {},
				color: {},
				price: {},
			},
		})
		history.push(URL.SHOP);
	};


	return (
		<div className="row">
			<div className="col-12">
				<div className="product-topbar d-xl-flex align-items-end justify-content-between">
					<div className="total-products">
						<p>Showing 1-8 0f 25</p>
						<div className="view d-flex">
							<a href="#"><i className="fa fa-th-large" aria-hidden="true"></i></a>
							<a href="#"><i className="fa fa-bars" aria-hidden="true"></i></a>
						</div>
					</div>
					<div className="product-sorting d-flex">
						<div className="sort-by-date d-flex align-items-center mr-15">
							<p>Sort by</p>
							<form action="#" method="get">
								<select name="select" id="sortBydate" style={{display: "none"}}>
									<option value="value">Date</option>
									<option value="value">Newest</option>
									<option value="value">Popular</option>
								</select>
								<div className="nice-select" tabIndex="0"><span className="current">Date</span>
									<ul className="list">
										<li data-value="value" className="option selected">Date</li>
										<li data-value="value" className="option">Newest</li>
										<li data-value="value" className="option">Popular</li>
									</ul>
								</div>
							</form>
						</div>
						<div className="view-product d-flex align-items-center">
							<p>View</p>
							<form action="#" method="get">
								<select name="select" id="viewProduct" style={{display: "none"}}>
									<option value="value">12</option>
									<option value="value">24</option>
									<option value="value">48</option>
									<option value="value">96</option>
								</select>
								<div className="nice-select" tabIndex="0"><span className="current">12</span>
									<ul className="list">
										<li data-value="value" className="option selected">12</li>
										<li data-value="value" className="option">24</li>
										<li data-value="value" className="option">48</li>
										<li data-value="value" className="option">96</li>
									</ul>
								</div>
							</form>
						</div>
					</div>
				</div>
				{
					showResetFilter && (
						<a
							role="button"
							className="btn amado-btn active"
							style={{color: "#ffffff", cursor: "pointer", marginBottom: "30px"}}
							onClick={ handleResetFilters }
						>Сбросить фильтры</a>)
				}
			</div>
		</div>
	);
}

export default React.memo(Header);
