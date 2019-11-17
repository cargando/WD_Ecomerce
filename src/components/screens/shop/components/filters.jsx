import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../../../../components/spinner';
import { tob } from '../../../../js/functions';
import { updateFilter } from "../../../../store/actions";
import * as URL from '../../../../router/url';


NavFilters.propTypes = {
	colorList: PropTypes.arrayOf(PropTypes.object), // from Redux
	brandList: PropTypes.arrayOf(PropTypes.object), // from Redux
	categoryList: PropTypes.arrayOf(PropTypes.object), // from Redux
	ranges: PropTypes.object, // from Redux
	activeBrand: PropTypes.string,
};

function NavFilters(props) {
	const brandList = useSelector(state => state.app.brands.response || {});
	const categoryList = useSelector(state => state.app.categories.response || {});
	const colorList = useSelector(state => state.app.colors.response || {});
	const ranges = useSelector(state => state.app.ranges.response || {});
	const activeFilters = useSelector(state => state.app.filters || {});
	const dispatcher = useDispatch();

	const { code: activeBrand } = props.match.params;

	const handleBrandClick = (e) => {
		const { brand  = {}} = activeFilters;
		const { checked } = e.target;
		const id = e.target.getAttribute("data-id");

		brand[id] = checked;

		dispatcher({
			type: updateFilter.getType(),
			payload: {
				brand: {...brand},
			},
		});
	};

	const handleColorClick = (e) => {
		e.preventDefault();
		const { color = {}} = activeFilters;
		const id = e.target.getAttribute("data-id");
		const checked = tob(() => activeFilters.color[id], false)

		color[id] = !checked;

		dispatcher({
			type: updateFilter.getType(),
			payload: {
				color: {...color},
			},
		});
	};

	const renderCategories = list => list.map(item => (
		<li key={ item.id } className={activeBrand === item.title ? "active" : null }>
			<Link to={ `${ URL.SHOP }/${ item.url }` }>{ item.title }</Link>
		</li>));

	const renderBrands = list => list.map(item => (
			<div className="form-check" key={ item.id }>
				<input
					className="form-check-input"
					type="checkbox"
					data-id={ item.id }
					id={ `filterCheckbox${ item.id }` }
					checked={ tob(() => activeFilters.brand[item.id], false) }
					onClick={ handleBrandClick }
					value={1}
				/>
				<label className="form-check-label" htmlFor={ `filterCheckbox${ item.id }` } onClick={ handleBrandClick }>{ item.title }</label>
			</div>));

	const renderColorList = list => list.map(item => (
		<li key={ item.id }>
			<a href="#"
			   onClick={ handleColorClick }
			   data-id={ item.id }
			   className={`color${ item.id }`}
			   style={ tob(() => activeFilters.color[item.id], false) ? {border: '5px solid #f90000'} : null }
			>
			</a>
		</li>
	));

	const renderPriceRange = () => {
		if (ranges.isLoading) {
			return (<Spinner />);
		}
		const { priceMin = 0, priceMax = 0 } = tob(() => ranges.data[0], {});
		return (
			<div className="widget-desc">
				<div className="slider-range">
					<div data-min="10" data-max="1000" data-unit="$"
					     className="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
					     data-value-min="10" data-value-max="1000" data-label-result="">
						<div className="ui-slider-range ui-widget-header ui-corner-all"></div>
						<span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex="0" style={ {left: "0%"} }></span>
						<span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex="0" style={{ left: "100%" } }></span>
						<div className="ui-slider-range ui-corner-all ui-widget-header" style={{ left: "0%", width: "100%" } }></div>
					</div>
					<div className="range-price">${ priceMin } - ${ priceMax }</div>
				</div>
			</div>
		);
	};


	return (
		<div className="shop_sidebar_area">
			<div className="widget catagory mb-50">
				<h6 className="widget-title mb-30">Catagories</h6>
				<div className="catagories-menu">
					<ul>
						{
							brandList.isLoading ?
								<Spinner />
								: renderCategories(categoryList.data || [])
						}
					</ul>
				</div>
			</div>

			<div className="widget brands mb-50">
				<h6 className="widget-title mb-30">Brands</h6>

				<div className="widget-desc">
					{
						brandList.isLoading ?
							<Spinner />
							: renderBrands(brandList.data || [])
					}
				</div>
			</div>

			<div className="widget color mb-50">
				<h6 className="widget-title mb-30">Color</h6>

				<div className="widget-desc">
					<ul className="d-flex">
						{
							brandList.isLoading ?
								<Spinner />
								: renderColorList(colorList.data || [])
						}

					</ul>
				</div>
			</div>

			<div className="widget price mb-50">
				<h6 className="widget-title mb-30">Price</h6>
				{
					renderPriceRange()
				}
			</div>
		</div>
	);
}

export default React.memo(withRouter(NavFilters));
