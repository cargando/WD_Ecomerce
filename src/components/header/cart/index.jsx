import React from 'react';


function NavCart(props) {

	return (
		<div className="cart-fav-search mb-100">
			<a href="cart.html" className="cart-nav"><img src="img/core-img/cart.png" alt="" /> Cart <span>(0)</span></a>
			<a href="#" className="fav-nav"><img src="img/core-img/favorites.png" alt="" /> Favourite</a>
			<a href="#" className="search-nav"><img src="img/core-img/search.png" alt="" /> Search</a>
		</div>
	);

}

export default NavCart;
