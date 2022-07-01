import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProductModal({ showModal, onClose }) {
	const { product } = showModal
	const [cart, setCart] = useState(
		JSON.parse(localStorage.getItem('cart')) || []
	)
	const [count, setCount] = useState(0)
	const [price, setPrice] = useState(product.attributes.Price || 0)
	const navigate = useNavigate()

	useEffect(() => {
		if (count === 0) return
		setPrice(product.attributes.Price * count)
	}, [count])

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
		if (cart.find((item) => item.product.id === product.id)) {
			navigate('/cart')
		}
	}, [cart])

	const addProduct = ({ product }) => {
		const hasItem = cart.filter((item) => item.product.id === product.id)[0]

		if (hasItem) {
			setCart([
				...cart.filter(
					(item) => item.product.id !== hasItem.product.id
				),
				{
					...hasItem,
					price,
					count,
				},
			])
			localStorage.setItem('cart', JSON.stringify(cart))
		} else {
			setCart([...cart, { product, price, count }])
			localStorage.setItem('cart', JSON.stringify(cart))
		}
	}

	const removeCount = () => (count === 0 ? null : setCount(count - 1))

	function addCount() {
		setCount(count + 1)
	}

	return (
		<div className="main-modal is-flex is-justify-content-center is-align-items-center">
			<div className="box p-6">
				<button className="delete is-large" onClick={onClose}></button>
				<figure className="image">
					<img
						src={`http://localhost:1337${product.attributes.Image.data.attributes.url}`}
						alt=""
					/>
				</figure>
				<br />
				<h1 className="title is-3 mt-6 mb-6">
					{product.attributes.Name}
				</h1>
				<p className="subtitle is-6">
					{product.attributes.Description}
				</p>
				<br />
				<h2 className="title is-6 pb-5">Количество {count}</h2>
				<p className="subtitle is-6">{price} сум</p>
				<div className="buttons has-addons are-small is-right">
					<button className="button" onClick={removeCount}>
						-
					</button>
					<button className="button" onClick={addCount}>
						+
					</button>
				</div>
				<br />
				<button
					disabled={count === 0 ? true : false}
					className="button is-success is-large is-fullwidth"
					onClick={() => addProduct({ product })}
				>
					Добавить
				</button>
			</div>
		</div>
	)
}
