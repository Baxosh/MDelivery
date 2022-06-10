export const PRODUCTS =
	'http://localhost:1337/api/products?populate=category&populate=restaurant&populate=Image'
export const PRODUCT =
'http://localhost:1337/api/products/id?populate=category&populate=restaurant&populate=Image&populate=reviews'
export const RESTAURANTS = 'http://localhost:1337/api/restaurants?populate=product&populate=product&populate=Image'
export const CATEGORIES = 'http://localhost:1337/api/categories'
export const ORDER_PRODUCTS = 'http://localhost:1337/api/order-products'
export const ORDER_PRODUCT =
	'http://localhost:1337/api/order-products/id?populate=product'
export const ORDERS =
	'http://localhost:1337/api/orders?populate=customer&customer=order_products'
export const ORDER =
	'http://localhost:1337/api/orders/id?populate=customer&customer=order_products'
export const REVIEWS = 'http://localhost:1337/api/reviews'
export const REVIEWS_OF_PRODUCT =
	'http://localhost:1337/api/reviews?populate=product&populate=customer&filters[product][id]=productId'


	// console.log('http://localhost:1337/api/restaurants?populate=category&populate=product&populate=Image')