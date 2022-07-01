import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RestaurantDetail from './pages/RestaurantDetail'
import Home from './pages/Home'
import Cart from './pages/Cart'


export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} exact />
				<Route path="/restaurant/:id" element={<RestaurantDetail />} />
				<Route path="/cart" element={<Cart />} exact />
			</Routes>
		</BrowserRouter>
	)
}
