import React from "react";
import * as PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import { updateCartCounter, deleteItemFromCart } from '../../store/actions';


// function Counter(props) {
const Counter = (props) => {

	const dispatcher = useDispatch();
	const { id, cnt, max } = props;

	const handleIncrement = () => {
		if (cnt + 1 > max) {
			return null;
		}
		dispatcher({
			type: updateCartCounter.getType(),
			payload: {id, cnt: cnt + 1},
		});
	};

	const handleDecrement = () => {
		const action = cnt - 1 <= 0 ? deleteItemFromCart : updateCartCounter;
		dispatcher({
			type: action.getType(),
			payload: {id, cnt: cnt - 1},
		});
	};

	const handleChange = (e) => {
		const re = /\D+/gi;
		let value = +e.target.value.replace(re, '');

		const action = value <= 0 ? deleteItemFromCart : updateCartCounter;

		dispatcher({
			type: action.getType(),
			payload: {id, cnt: value},
		});
	};


	return (
		<td className="qty">
			<div className="qty-btn d-flex">
				<p>Qty</p>
				<div className="quantity">
						<span
							className="qty-minus"
				      onClick={handleDecrement}
						>
							<i className="fa fa-minus" aria-hidden="true"></i>
						</span>
					<input
						type="number"
						className="qty-text"
						step="1"
						min="1"
						max="300"
						name="quantity"
						value={ cnt }
						onChange={ handleChange }
					/>
					<span
						className="qty-plus"
			      onClick={ handleIncrement }>
						<i className="fa fa-plus" aria-hidden="true"></i>
					</span>
				</div>
			</div>
		</td>
	);
};

Counter.propTypes = {
	id: PropTypes.number,
	cnt: PropTypes.number,
	max: PropTypes.number,
};

export default Counter;
