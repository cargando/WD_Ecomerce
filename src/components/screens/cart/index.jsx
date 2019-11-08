import React from 'react';
import CartTable from "./components/table";
import { useSelector } from 'react-redux';
import Total from "./components/total";

function Cart(props) {

	const cartData = useSelector((store) => store.app.cart);


	return (
		<div className="cart-table-area section-padding-100">
			<div className="container-fluid">
				<div className="row">
					<div className="col-12 col-lg-8">
						<div className="cart-title mt-50">
							<h2>Shopping Cart</h2>
						</div>
						<div className="cart-table clearfix">
							<CartTable data={ cartData } />
						</div>
					</div>
					<Total />
				</div>
			</div>
		</div>
	)

}

export default Cart;
