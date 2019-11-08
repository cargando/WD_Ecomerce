export const HOME = '/';
export const SHOP = '/shop';
export const CART = '/cart';
export const PRODUCTS = '/product';
export const PRODUCTS_BED = `${ PRODUCTS }/beds`;
export const PRODUCTS_DOOR = `${ PRODUCTS }/doors`;
export const PROD_DETAILS = '/product/view/:code';
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
		children: [
			{
				title: 'bed',
				url: PRODUCTS_BED,
				home: true,
			},
			{
				title: 'doors',
				url: PRODUCTS_DOOR,
				home: true,
			}
		]
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

