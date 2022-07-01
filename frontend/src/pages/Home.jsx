import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Products from '../components/Products'
import Restaurants from '../components/Restaurants'
import TypeOfProduct from '../components/TypeOfProduct'
import Navbar from '../components/Navbar'
import { CATEGORIES, PRODUCTS, RESTAURANTS } from '../utils/urls'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import { useLocation, useParams } from 'react-router-dom'

export default function Home() {
	const [products, setProducts] = useState()
	const [restaurants, setRestaurants] = useState([])
	const [categories, SetCategories] = useState()
	const { search } = useLocation()

	useEffect(() => {
		load()

		axios
			.get(RESTAURANTS)
			.then((res) => setRestaurants(res.data.data))
			.catch((err) => console.log(err))
		axios
			.get(CATEGORIES)
			.then((res) => SetCategories(res.data.data))
			.catch((err) => console.log(err))
	}, [])

	useEffect(() => {
		load()
	}, [search])

	const load = () => {
		axios
			.get(PRODUCTS + `&filters[Name][$startsWith]=${search.slice(7)}`)
			.then((response) => setProducts(response.data.data))
			.catch((err) => console.log(err))
	}

	return (
		<Layout>
			<div className="title is-size-4" style={{ marginLeft: '150px' }}>
				<h1>Top restaurant products</h1>
			</div>
			{products && products.length > 0 ? (
				<Products
					products={products}
					setProducts={setProducts}
					restaurants={restaurants}
				/>
			) : (
				<h1 className='title has-text-centered my-6'>Not found</h1>
			)}
			<Restaurants
				restaurants={restaurants}
				setRestaurants={setRestaurants}
				products={products}
				categories={categories}
			/>
			<Footer />
		</Layout>
	)
}
