import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Products from '../components/Products'
import Restaurants from '../components/Restaurants'
import logo from '../static/images/logo.png'
import { PRODUCTS, CATEGORIES, RESTAURANTS } from '../utils/urls'


export default function Home() {
	const [products, setProducts] = useState()
	const [categories, setCategories] = useState([])
	const [restaurants, setRestaurants] = useState([])

	useEffect(() => {
		load()
		axios
			.get(CATEGORIES)
			.then((res) => setCategories(res.data.data))
			.catch((err) => console.log(err))
		axios
			.get(RESTAURANTS)
			.then((res) => setRestaurants(res.data.data))
			.catch((err) => console.log(err))	
		}, [])

	const load = () => {
		axios
			.get(PRODUCTS)
			.then((response) => setProducts(response.data.data))
			.catch((err) => console.log(err))
	}

	return (
		<div>
			<img src={logo} alt="" />
			<Products products={products} setProducts={setProducts} />
			<Restaurants restaurants={restaurants} setRestaurants={setRestaurants}/>
		</div>
	)

}
