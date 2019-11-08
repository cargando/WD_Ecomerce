import React from "react";
import * as PropTypes from "prop-types";
import Counter from "../../../product_counter";

function Row({id, title, img, price, cnt, max}) {
	console.log("cartData", cnt, title);
	// const Image = img.small;

	return (
		<tr key={ id }>
			<td className="cart_product_img">
				<a href="#"><img src={ img.small } alt="Product" /></a>
			</td>
			<td className="cart_product_desc">
				<h5>{ title }</h5>
			</td>
			<td className="price">
				<span>${ price }</span>
			</td>
			<Counter id={ id } cnt={ cnt } max={ max } />
		</tr>)

}

Row.propTypes = {
	img: PropTypes.any,
	title: PropTypes.string,
	price: PropTypes.number,
	cnt: PropTypes.number,


};
export default Row;
