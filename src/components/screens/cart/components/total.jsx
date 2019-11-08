import React from 'react';
import { useSelector } from 'react-redux';


function Total(props) {

	const cartData = useSelector((store) => store.app.cart);

	let summ = 0;
	let cnt = 0;
	cartData.forEach( item => {
		summ += item.price * item.cnt;
		cnt += item.cnt;
	});

	return (
		<div className="col-12 col-lg-4">
			<div className="cart-summary">
				<h5>Cart Total</h5>
				<ul className="summary-table">
					<li><span>things:</span> <span>{ cnt }</span></li>
					<li><span>delivery:</span> <span>Free</span></li>
					<li><span>total:</span> <span>${ summ }</span></li>
				</ul>
				<div className="cart-btn mt-100">
					<a href="cart.html" className="btn amado-btn w-100">Checkout</a>
				</div>
			</div>
		</div>
	)

}

export default Total;
