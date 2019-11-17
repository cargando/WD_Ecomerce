export const HOME = '/';
export const SHOP = '/shop';
export const SHOP_C = `${ SHOP }/:code`;
export const CART = '/cart';
export const PRODUCTS = '/product';
export const PROD_DETAILS = '/product/view';
export const PROD_DETAILS_C = `${ PROD_DETAILS }/:code`;
export const CHECKOUT = '/checkout';

export const NAVIGATION = [
	{
		title: 'Home',
		url: HOME,
		home: true,
	},
	{
		title: 'shop',
		url: SHOP,
		home: true,
	},
	{
		title: 'product',
		url: PRODUCTS,
		home: true,
	},
	{
		title: 'cart',
		url: CART,
		home: true,
	},
	{
		title: 'checkout',
		url: CHECKOUT,
		home: true,
	},
];
// export const BEDS = `${ SHOP }/beds/:code`;

