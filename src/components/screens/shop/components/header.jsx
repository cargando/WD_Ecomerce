import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useRouteMatch } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { updateFilter, updateItemsOnPage } from "../../../../store/actions";
import DropDown from '../../../../components/dropdown';
import * as URL from '../../../../router/url';

Header.propTypes = {

};

const sortByList = ['Date', 'Newest', 'Popular'];
const viewOnPageList = [12, 24, 48, 96];


function Header(props) {
	const [ sortBy, setSortBy ] = useState(0);
	const viewOnPage = useSelector(state => state.app.itemsOnPage);

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
		});
		history.push(URL.SHOP);
	};

	const handleChangeDropDown = (index, name) => {
		if (name === "sortBy") {
			setSortBy(index);
		} else if (name === "viewOnPage") {

			dispatcher({ // обновить данные в редакс - глобал сторадж
				type: updateItemsOnPage.getType(),
				payload: index,
			});
		}
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

						<DropDown
							title="Sort by"
							name="sortBy"
							current={ sortBy }
							options={ sortByList }
							onChange={ handleChangeDropDown }
						/>

						<DropDown
							title="View"
							name="viewOnPage"
							current={ viewOnPage }
							options={ viewOnPageList }
							onChange={ handleChangeDropDown }
						/>


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
