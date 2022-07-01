// export const addProduct = ({ product }) => {
// 	const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])

// 	useEffect(() => {
// 		localStorage.setItem('cart', JSON.stringify(cart))
// 	}, [cart])

// 	const hasItem = cart.filter((item) => item.product.id === product.id)[0]

// 	if (hasItem) {
// 		console.log('if');
// 		setCart([
// 			...cart.filter((item) => item.product.id !== hasItem.product.id),
// 			{
// 				...hasItem,
// 				count: hasItem.count + 1,
// 			},
// 		])
// 	} else {
// 		console.log('else');
// 		setCart([...cart, { product, count: 1 }])
// 	}
// }
