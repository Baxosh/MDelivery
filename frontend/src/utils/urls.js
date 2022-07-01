export const PRODUCTS =
	'http://localhost:1337/api/products?populate[restaurant][populate]=image&populate[restaurant][populate]=logo&populate=type_of_product&populate[Image]=*'
export const PRODUCT =
	'http://localhost:1337/api/products/id?populate=type_of_product&populate=restaurant&populate=Image&populate=reviews'

export const RESTAURANTS =
	'http://localhost:1337/api/restaurants?populate=products&populate=image&populate=type_of_products&populate=categories&populate=logo'
export const RESTAURANT =
	'http://localhost:1337/api/restaurants/id?populate[products][populate]=Image&populate=logo&populate[categories]=*&populate[image]=*&populate[type_of_products]=*'

export const TYPEOFPRODUCTS =
	'http://localhost:1337/api/type-of-products?populate=restaurant&populate=products'
export const CATEGORIES =
	'http://localhost:1337/api/categories?populate=restaurants'

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


export const USERUIS = 'http://localhost:1337/api/user-uis'